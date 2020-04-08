const express = require("express");
const app = express();
require("dotenv").config();

const { PORT } = process.env;

app.use("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
