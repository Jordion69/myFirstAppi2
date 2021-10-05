const express = require("express");
const app = express();
require("dotenv");

const myFirstController = require("./controllers/myFirstController");

module.exports.helloWorld = (req, res) => {};
// req = request
// res = response
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("My First Api running!");
});
