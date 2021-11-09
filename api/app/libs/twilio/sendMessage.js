const client = require("../../../config/twilio");

const sendMessage = (message, phone, userId) => {
    client.messages
      .create({body: `${message}, puedes seguir mi ubicación aquí: ${process.env.HOST}?trackId=${userId}`, from: '+19295436302', to: `+51${phone}`})
      .then(message => console.log(message.sid));
}

module.exports = {
  sendMessage
}