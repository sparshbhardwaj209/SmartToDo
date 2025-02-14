const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
