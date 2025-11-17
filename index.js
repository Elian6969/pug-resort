const express = require("express");
const port = 3000;
const morgan = require("morgan");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("fungerar");
});
