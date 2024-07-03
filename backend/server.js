const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World MERN" });
});

app.listen(process.env.PORT, () =>
  console.log("Server running on port ", process.env.PORT)
);
