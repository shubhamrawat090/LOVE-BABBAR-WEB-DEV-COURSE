const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");

// define api routes
// SYNTAX: router.{{method: get, post, etc.}}("your route", controller name);

// create todos api route
router.post("/createTodo", createTodo);

// get all todos
router.get("/getTodos", getTodo);

// get single todo by id
router.get("/getTodos/:id", getTodoById);

// update todo by id
router.put("/updateTodo/:id", updateTodo);

module.exports = router;
