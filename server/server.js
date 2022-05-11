const { createServer } = require("http");
const { Server } = require("socket.io");
const config = require('../conf/config');

const httpServer = createServer();
const io = new Server(httpServer);
io.on("connection", (socket) => {
    console.log(`websocket 客户端已连接： ${socket.id}`);
});

httpServer.listen({host: config.localHost, port: config.localPort});
console.log(`websocket服务器已启动: ${config.localHost}:${config.localPort}`)