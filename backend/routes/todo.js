const express = require("express");
const router = express.Router();
const { getTodos } = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getTodos);

module.exports = router;
