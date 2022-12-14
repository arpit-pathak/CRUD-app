require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoutes");

// Middleware

app.use(express.json()); // this will accept json value send from frontend
app.use(express.urlencoded({ extended: true })); // for accepting formpurlencoded

connectToDB();

app.use("/", userRoutes);

module.exports = app;
