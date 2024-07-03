const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const recipesRoute = require("./routes/recipes");

const app = express();

app.use(morgan("dev"));
app.use("/api/recipes", recipesRoute);
app.get("/", (req, res) => {
  res.json({ message: "Hello World MERN" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
