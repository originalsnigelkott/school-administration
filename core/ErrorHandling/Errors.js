class GeneralError extends Error {
  constructor(log, message = "Internal server error.") {
    super();
    this.log = `${new Date().toLocaleString()}: An error occured: ${log}`;
    this.message = message;
  }

  getCode() {
    if (this instanceof NotFound) {
      return 404;
    }
    return 500;
  }
}

class NotFound extends GeneralError {
  constructor(entity = "Entity") {
    const log = `Failed to find ${entity}.`;
    const message = `${entity} not found.`;
    super(log, message);
  }
 }

module.exports = {
  GeneralError,
  NotFound
}