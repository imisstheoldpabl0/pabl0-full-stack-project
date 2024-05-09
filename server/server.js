// Requirements: express, pg
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Requirements: routes
const userRoutes = require("./routes/user.routes")
const holdingsRoutes = require("./routes/holdings.routes")

// Middlewares
app.use(cors());
app.use(express.json());

/* ----- WEB ROUTES ----- */
// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

/* ----- API ROUTES ----- */
app.use('/users', userRoutes);
app.use('/holdings', holdingsRoutes);

const server = app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
  
  module.exports = server;