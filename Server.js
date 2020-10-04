const express = require("express");
const app = express();
const routes = require("./routes/Routes");
const bodyParser = require('body-parser');

module.exports = class Server {
  run() {
    this.#startServer();
  }

  #startServer() {
    const serverPort = 3060;
    app.use(bodyParser.json());
    app.use("/api", routes);
    app.listen(serverPort, () => {
      console.log(`Listening on port ${serverPort}`);
    })
  }
}