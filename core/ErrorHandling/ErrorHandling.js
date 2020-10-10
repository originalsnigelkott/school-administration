class ErrorHandler extends Error {
  constructor(statusCode, message, log) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.log = log;
  }
}

const handleError = (error, res) => {
  const { statusCode, message, log } = error;
  console.log(`An error occured: ${log}`);
  res.status(statusCode).text(message);
};

module.exports = {
  ErrorHandler,
  handleError,
};
