const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const recipesRoute = require("./routes/recipes");
const mongoose = require("mongoose");

const app = express();
const mongoUrl =
  "mongodb+srv://nayzawaung750:jkMYxLbkDDyVv5yd@cluster0.lwashty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl).then(() => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
});

app.use(morgan("dev"));
app.use("/api/recipes", recipesRoute);
app.get("/", (req, res) => {
  res.json({ message: "Hello World MERN" });
});

const PORT = process.env.PORT || 3000;
