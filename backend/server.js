const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const authRoutes = require("./routes/auth.js");
const todoRoutes = require("./routes/todo.js");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
