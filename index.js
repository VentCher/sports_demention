const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.render("Its running");
  res.end();
});


app.listen(3000, ()=>console.log(`Server listening on port ${3000}`));