const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;
require("./models/dbConnection");
const authRoutes = require("./routes/authRoutes.js");
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
