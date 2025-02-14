const express = require("express");
const router = express.Router();
const { getTodos } = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getTodos);
router.post("/, authMiddleware, createTodo");

module.exports = router;
