/** @format */
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
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

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);

//Port
const port = process.env.PORT || 5000;
//starting server
app.listen(port, () => {
  console.log(`app is running ${port}`);
});
