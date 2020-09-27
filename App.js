const Server = require("./Server");

class App {
  constructor() {
    this.server = new Server();
    this.server.run();
  }
}

new App();
