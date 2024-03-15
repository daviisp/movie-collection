require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const connectToDatabase = require("./database");
const cors = require("cors");

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("⚡ Backend started at http://localhost:3333");
});
