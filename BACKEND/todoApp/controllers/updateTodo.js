// import the model
const Todo = require("../models/Todo");

// define route handler
// exports.createTodo is another way to export
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params; // get id from route url
    const { title, description } = req.body; // fetch previous title and description

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: "Updated Successfully",
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
