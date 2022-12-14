const express = require("express");
const router = express.Router();
const User = require("../model/userModel");

// Home route
router.get("/", (req, res) => {
  res.send("hello! This is my CRUD App");
});

// creating user in db
router.post("/createUser", async (req, res) => {
  try {
    const { name, email } = req.body;

    // To check all the details
    if (!name || !email) {
      throw new Error("Name and Email are Required");
    }
    // Check if user is already exists in the DB or not
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User is Already Exists");
    }

    // Inserting into DB
    const user = await User.create({ name, email });
    res.status(201).json({
      success: true,
      message: "User is created Successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// getting all user data from db
router.get("/getUser", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      sucess: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

// Update user by id
router.put("/editUser/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated Successfully",
      id: req.params.id,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

// Delete user by id
router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      sucess: true,
      message: "User Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
