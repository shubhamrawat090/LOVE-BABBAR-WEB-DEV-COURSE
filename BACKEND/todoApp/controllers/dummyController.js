// import the model
const Todo = require("../models/Todo");

// define route handler
exports.dummyController = async (req, res) => {
  try {
    res.send(`<h1>Dummy Route</h1>`);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "internal server error",
      error: err.message,
    });
  }
};
