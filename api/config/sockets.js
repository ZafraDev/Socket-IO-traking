const { findSelectedMessage, findConfigByUserId } = require("../app/controllers/configs/helpers");
const { saveTrack, getTracksByUserId } = require("../app/controllers/track/helpers");
const { addCounter, getCounterByUserId } = require("../app/controllers/trackCounter/helpers");
const { on, emitTo } = require("../app/libs/sockets");
const { sendMessage } = require("../app/libs/twilio/sendMessage");

const socketIO = (io) => {
  on(io, "connection", (socket) => {
    console.log("connection", socket.client.id);
    //init track
    on(socket, "track:init", async ({ user, message }) => {
      socket.join(user);
      console.log("message", message)
      const config = await findConfigByUserId(user)
      if (!message) {
        console.log("no message")
        sendMessage("Me encuentro en peligro", config.contacts[0].phone, user)
      } else {
        console.log("with message")
        const strMessage = await findSelectedMessage(config, message);
        console.log("foundedMessage", strMessage)
        sendMessage(strMessage, config.contacts[0].phone, user)
      }

      await addCounter(user);
      console.log("track conectado", user)
    });

    on(socket, "track:initListen", (_id) => {
      socket.join(`${_id}L`);
      console.log("track para escucha conectado", `${_id}L`)
    });

    //record track
    on(socket, "track:online", (data) => {
      getCounterByUserId(data.user).then((trackCounter) => {
        getTracksByUserId(data.user, trackCounter.seq).then((tracks) => {
          emitTo(`${data.user}L`, "track:listen", { route: tracks, now: { lng: data.lng, lat: data.lat } });
        })
        saveTrack({ ...data, seq: trackCounter.seq });
        console.log("track:online", { ...data, seq: trackCounter.seq })
      });

    });

    //stop track
    on(socket, "track:offline", (_id) => {
      socket.leave(_id);
      emitTo(`${_id}L`, "track:message", { message: "El usuario terminó el seguimiento en tiempo real" });
      console.log("track:offline", _id)
    });

    on(socket, "disconnect", () => {
/*       const rooms = getRooms(socket)
      console.log(rooms) */
/*       emitTo(roomId, "track:message", { message: "Se perdió la conexion con el dispositivo del usuario" })
 */      console.log("disconnect");
    });
  });
};

module.exports = { socketIO };
