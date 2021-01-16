/** @format */
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//my routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productsRoutes = require("./routes/product")
const orderRoutes = require("./routes/order");
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
app.use(cookieParser()); // add and remove some values in cookies
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productsRoutes);
app.use("/api", orderRoutes)

//Port
const port = process.env.PORT || 5000;
//starting server
app.listen(port, () => {
  console.log(`app is running ${port}`);
});