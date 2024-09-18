const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const newUser = await Users.RegisterUser(
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
    const user = await Users.LoginUser(email, password);

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
// -----------------------log in-----------------------------
exports.getUserData = async (req, res) => {
  const userId = req.user.id; // تأكد من الحصول على معرف المستخدم من الجلسة أو الـ JWT

  try { 
    const user = await Users.getUserById(userId);

    // if (!user) {
    //   return res.status(404).json({ loggedIn: true, user: null });
    // }

    res.status(200).json({
      loggedIn: true,
      user: user
    });  } catch (error) {
    console.error('Error fetching user data:', error.message);
    res.status(500).json({ loggedIn: true, user: null });
  }
};