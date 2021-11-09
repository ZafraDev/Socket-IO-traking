const { io } = require("socket.io-client");

const socket = io('https://prueba2.castillodetalentos.edu.pe', {  //cambiar url si es necesario
    path: "/hackathon-comercio/api/socket/connect"
});

//emitir inicio con el id del usuario
socket.emit("track:init", {user: "6185faa16892e7ce2067f101"});


//obj de coordenadas a enviar
let coord = {
    lng: 100,
    lat: 120,
    user: "6185faa16892e7ce2067f101"
}
setInterval(() => {
    //emitir las coordendas */
    console.log(coord)
    socket.emit("track:online", coord)
}, 3000) 


//emitir cuando el usuario termina de compartir su ubicación, enviar el id usuario
setTimeout(() => socket.emit("track:offline", "6185faa16892e7ce2067f101"), 3000)

