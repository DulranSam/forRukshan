const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/rukshan", (req, res) => {
  res.json({ Alert: "Hello Rukshan" });
});

app.listen(port, console.log(`Servers up on port ${port}`));
