// import the model
const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params; // get id from route url

    const todo = await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      data: todo, // show the deleted object
      message: `Deleted Todo ${id} Successfully`,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "internal server error",
      error: err.message,
    });
  }
};
