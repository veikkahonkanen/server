const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(200, "<!Doctype html><html><head></head><body><h1>Heipat</h1></body></html>");
})

app.listen(port, ()  => {
  console.log(`Running at ${port}`);
});
