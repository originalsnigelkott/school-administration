const { GeneralError } = require("./Errors")

const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    const { message, log } = err;
    const code = err.getCode();

    console.log(log);

    return res.status(code).json({
      status: "error",
      message
    });
  }

  console.log(err.message);

  return res.status(500).json({
    status: "error",
    message: "Internal server error"
  })
}

module.exports = handleErrors;