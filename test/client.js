const { io } = require("socket.io-client");

const socket = io("wss://websocket.zuogechengxu.com",{
    transports: ["websocket", "polling"]
});

socket.on("connect", () => {
    console.log(`已连接到服务器:${socket.id}`);
});

socket.on("connect_error", () => {
    // revert to classic upgrade
    socket.io.opts.transports = ["polling", "websocket"];
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
});