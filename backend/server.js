const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/rukshan", (req, res) => {
  const balls = "Haseeb wants to greet you";
  res.send(`Hello rukshan ${balls} `);
});

app.listen(port, console.log(`Servers up on port ${port}`));
