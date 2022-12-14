const express = require("express");
const {
  home,
  createUser,
  getUser,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

// Home route
router.get("/", home);

// creating user in db
router.post("/createUser", createUser);

// getting all user data from db
router.get("/getUser", getUser);

// Update user by id
router.put("/editUser/:id", editUser);

// Delete user by id
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
