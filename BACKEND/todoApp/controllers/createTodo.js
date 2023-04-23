// import the model
const Todo = require("../models/Todo");

// define route handler
// exports.createTodo is another way to export
exports.createTodo = async (req, res) => {
  try {
    // extract title, desc from request body
    const { title, description } = req.body;

    // create a new Todo Obj and insert in DB -> use create()
    const response = await Todo.create({ title, description });

    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);

    res
      .status(500) // internal server error
      .json({
        success: false,
        data: "internal server error",
        message: err.message,
      });
  }
};
