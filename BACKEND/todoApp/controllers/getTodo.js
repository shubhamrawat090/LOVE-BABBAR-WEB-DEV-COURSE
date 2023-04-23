// import the model
const Todo = require("../models/Todo");

// define route handler
exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is fetched",
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

exports.getTodoById = async (req, res) => {
  try {
    //extract todo item basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id }); // in mongo database key for id is "_id"

    // data for given id NOT found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id",
      });
    }
    // data for given id FOUND
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
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
