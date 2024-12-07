const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB connected Successfully");
  })
  .catch((err) => {
    console.log("Errow while connected MongoDB", err);
  });
