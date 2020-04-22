const express = require("express");
const app = express();
const cors = require("cors");
const { routes } = require("./services/routes");
require("dotenv").config();

const { PORT } = process.env;
app.use(cors());
app.use(express.json());
app.use("/", (req, res) => {
  res.send("Hello world!");
});
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
