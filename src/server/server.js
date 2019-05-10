const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");
var port = process.env.PORT || 3000;

let x = 42;

app.use(express.static("public"));

app.get("/x", (req, resp) => {
  resp.send({ x });
});

const wss = new WebSocket.Server({ server });

wss.on("connection", function(ws, request) {
  console.log("connected");
  ws.send(JSON.stringify({ msg: "hello" }));
  ws.on("message", function(message) {
    console.log(`WS message ${message}`);
  });
});

server.listen(port, function() {
  console.log("Server listening at port %d", port);
});
