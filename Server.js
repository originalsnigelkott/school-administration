const express = require("express");
const app = express();
const router = require("./controllers/MainController");
const bodyParser = require("body-parser");

class Server {
  static instance;

  constructor(port) {
    this.startServer(port);
  }
  static getInstance() {
    if (!Server.instance) {
      Server.instance = new Server(3060);
    }
    return Server.instance;
  }

  startServer(port) {
    app.use(bodyParser.json());
    app.use("/api", router);
    app.listen(port, () => {
      console.log(`Listening on port ${port}.`);
    });
  }
}

Server.getInstance();
