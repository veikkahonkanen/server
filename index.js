const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(200, "Hei siellä!");
})

app.listen(port, ()  => {
  console.log(`Palvelin käynnissä portissa ${port}`);
});