/** @format */
require("dotenv").config();
const express = require("express");
const app = express();
// getting-started.js
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(err => {
    console.log(err);
  });

const port = 8000;
app.listen(() => {
  console.log(`app is running ${port}`);
});
