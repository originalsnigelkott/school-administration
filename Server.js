const express = require("express");
const app = express();

module.exports = class Server {
  constructor() {}

  run() {
    startServer();
  }

  startServer() {
    const serverPort = 3060;
    app.listen(serverPort, () => {
      console.log(`Listening on port ${serverPort}`);
    })
  }
}