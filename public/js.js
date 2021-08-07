//para conectarse al socket , al momenot de agregarlo al index, se crea una varible
//io , io es una funcion y al ejecutarla ya estaremos conectados a l socket  y cada vez
// que se recargue la pagina ese se genera una nueva conexion , se cancela la que estaba
//conecta y prende otra vez la conección

//la función io resibe como parametro el dominio al cual hara referi
const socket = io();

console.log(socket);

const message = document.getElementById("message");
const userName = document.getElementById("username");
const button = document.getElementById("send");

const actions = document.getElementById("actions");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  //emit, emite los datos al servidor , resive el key para indetificar el dato y valor de key
  // socket.emit("message", {
  //   userName: userName.value,
  //   message: message.value,
  // });
});

// message.addEventListener("keypress", () => {
//   socket.emit("chat:typing", userName.value);
// });

// socket.on("servidor-message", (data) => {
//   actions.innerHTML = " ";
//   output.innerHTML = `<p>${data.userName} : ${data.message}</p>`;
// });

// socket.on("chat:typing", (data) => {
//   actions.innerHTML = `<p> ${data}  esta escribiendo...</p>`;
// });
//emit - emitir / enviar datos
//on - escuchar / revive los datos emitidos
