// Requirements: express, pg
const express = require("express");
const app = express();
const port = 3000;

/* ----- ROUTES ----- */
// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

const server = app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });
  
  module.exports = server;