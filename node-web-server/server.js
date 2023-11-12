const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express!</h1>");
});

app.get("/about", (req, res) => {
  res.send("ABOUT");
})
app.listen(3000);
