const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
} = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getTodos);

router.post("/", authMiddleware, createTodo);

router.put("/:id", authMiddleware, updateTodo);

module.exports = router;
