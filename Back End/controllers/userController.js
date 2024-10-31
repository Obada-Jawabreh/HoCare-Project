const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const knex = require("../config/dbConfig");

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const newUser = await User.RegisterUser(
      firstName,
      lastName,
      email,
      password
    );

    const token = jwt.sign(
      { id: newUser.user_id, email: newUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Server error" });
  }
};
// -----------------------log in-----------------------------
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.LoginUser(email, password);

    const token = jwt.sign(
      { id: user.user_id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });

    res.status(200).json(user);
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({ error: "Server error" });
  }
};
// -----------------------getUserData-----------------------------
exports.getUserData = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.getUserById(userId);

    // if (!user) {
    //   return res.status(404).json({ loggedIn: true, user: null });
    // }

    res.status(200).json({
      loggedIn: true,
      user: user,
    });
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({ loggedIn: true, user: null });
  }
};
// -----------------------updateUserData-----------------------------
exports.updateUserData = async (req, res) => {
  const userId = req.user.id;
  const { firstName, lastName, phoneNumber, aboutMe } = req.body;

  try {
    const updatedUser = await User.updateUserById(userId, {
      firstName,
      lastName,
      phoneNumber,
      aboutMe,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      loggedIn: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user data:", error.message);
    res
      .status(500)
      .json({ message: "Error updating user data", error: error.message });
  }
};
// -----------------------updateImageUserData-----------------------------
exports.updateImageUserData = async (req, res) => {
  try {
    const userId = req.user.id; 
    const user = await knex("users").where({ user_id: userId }).first(); 

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.profilePicture) {
      const oldImagePath = path.join(__dirname, "../", user.profilePicture); 
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    const fileExtension = path.extname(req.file.originalname);
    const newFileName = `profilePicture-${Date.now()}${fileExtension}`; 
    const newFilePath = path.join(__dirname, "../uploads", newFileName);

    fs.renameSync(req.file.path, newFilePath); 

    const fullPath = `uploads/${newFileName}`; 
    await knex("users")
      .where({ user_id: userId })
      .update({ profilePicture: fullPath }); 

    res.status(200).json({ 
      message: "Profile image updated successfully", 
      userId,
      newImagePath: fullPath 
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile image" });
  }
};
