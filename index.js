require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
var cors = require("cors");
const { v4: uuidv4 } = require("uuid");

app.use(cors());

app.set("port", process.env.PORT || 4000);
// console.log(__dirname);
//static files
//dirname te da la ruta de tu carpeta desde la raiz, ruta abosoluta a la cual le concatenamos el archivo que va a leer
app.use(express.static(path.join(__dirname, "public")));

// app.use(
//   express.static(
//     "/Users/rivaldoesteban/Documents/2021-proyectos/slacker/pages/index.js"
//   )
// );

const server = app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

const SocketIO = require("socket.io");
const io = SocketIO(server, {
  cors: {
    origin: "*",
  },
});
//websockets
io.on("connection", (socket) => {
  socket.on("message", (dataMessage) => {
    const id = uuidv4();
    console.log("enviando", dataMessage.messsage);
    io.sockets.emit("servidor-message", { ...dataMessage, id });
  });

  // socket.on("chat:typing", (data) => {
  //   socket.broadcast.emit("cat:typing", data);
  // });
});

//io.sockets.emit emite el mensaje a todos los que esten conectados
//socket.broadcast.emit emite el mensaje a todos excepto al que lo envio
