const Todo = require("../models/Todo");

// get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// create a todo api
exports.createTodo = async (req, res) => {
  const { text } = req.body;
  try {
    const newTodo = new Todo({
      text,
      user: req.user.id,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
