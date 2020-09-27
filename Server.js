const express = require("express");
const app = express();
const routes = require("./routes/Routes");

module.exports = class Server {
  run() {
    this.#startServer();
  }

  #startServer() {
    const serverPort = 3060;
    app.use(routes);
    app.listen(serverPort, () => {
      console.log(`Listening on port ${serverPort}`);
    })
  }
}