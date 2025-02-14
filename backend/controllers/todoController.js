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

// update a todo api
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed, text } = req.body;
  try {
    const todo = await Todo.findOneAndUpdate(
      {
        _id: id,
        user: req.user.id,
      },
      { completed, text },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
