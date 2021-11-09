const { io } = require("socket.io-client");

const socket = io('http://localhost:3000', {  //cambiar url si es necesario
    path: "/hackathon-comercio/api/socket/connect"
});

//enviar el id del usuario a escuchar este sera enviado por el params en la url del mensaje
socket.emit("track:initListen", "6185faa16892e7ce2067f101");

/* Escuchar las coordenadas
    retorna: 
    { 
        route: [
            { 
                lng: data.lng, 
                lat: data.lat, 
                user:"6185faa16892e7ce2067f101" 
            }
        ], 
        now: { lng: data.lng, lat: data.lat } 
    }
*/
socket.on("track:listen", (data) => {
    console.log(data)
})

/* 
    aca se enviará algun mensaje con respecto al seguimiento por ejemplo:  

        { message: "El usuario apagó el seguimiento en tiempo real" }

        { message: "Se perdió la conexion con el dispositivo del usuario" }

*/
socket.on("track:message", (data) => {
    console.log('message', data.message)
})

