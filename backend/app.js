require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const connectToDB = require("./config/db");

const app = express();

// Express Middleware
app.use(express.json()); // this will accept json value send from frontend
app.use(express.urlencoded({ extended: true })); // for accepting formpurlencoded
app.use(cors());

// Initialising connection to DB
connectToDB();

app.use("/", userRoutes);

module.exports = app;
