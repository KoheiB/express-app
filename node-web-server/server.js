const express = require("express");
const app = express();

// middleware
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express!</h1>");
});

app.get("/about", (req, res) => {
  res.send("ABOUT");
})
app.listen(3000);
