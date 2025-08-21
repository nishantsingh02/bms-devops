const { WebSocketServer } = require("ws");
const { client } = require("@repo/db/client");


const server = new WebSocketServer({
    port: 3001
});

//@ts-ignore
server.on("connection" , async (socket) => {
   const res = await client.user.create({
        data: {
            username: Math.random().toString(), // 0.000234
            password: Math.random().toString()
        }
    })
    socket.send("hi nishu you are connected to the server")
})