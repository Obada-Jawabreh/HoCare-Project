// controllers/RequestController.js
const Requests = require("../models/RequestModel");
const knex = require("./../config/dbConfig");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

exports.createApplication = async (req, res) => {
  const { fullName, phoneNumber, profession, aboutMe } = req.body;

  const { profilePicture, certificate, licenseToPractice, resume } = req.files;

  const profilePicturePath = profilePicture ? profilePicture[0].path : null;
  const certificatePath = certificate ? certificate[0].path : null;
  const licenseToPracticePath = licenseToPractice
    ? licenseToPractice[0].path
    : null;
  const resumePath = resume ? resume[0].path : null;

  try {
    const userId = req.user.id;

    const user = await knex("users").where("user_id", userId).first();

    if (user.profilePicture && profilePicturePath) {
      const oldProfilePicturePath = path.join(
        __dirname,
        "../uploads",
        path.basename(user.profilePicture)
      );
      console.log("Attempting to delete:", oldProfilePicturePath);

      if (fs.existsSync(oldProfilePicturePath)) {
        fs.unlink(oldProfilePicturePath, (err) => {
          if (err) {
            console.error("Error deleting old profile picture:", err);
          } else {
            console.log("Old profile picture deleted successfully");
          }
        });
      } else {
        console.log("Old profile picture does not exist");
      }
    }

    const newUser = await Requests.create(
      userId,
      fullName,
      phoneNumber,
      profession,
      aboutMe,
      certificatePath,
      licenseToPracticePath,
      profilePicturePath,
      resumePath
    );

    res
      .status(201)
      .json({ message: "Application created successfully", user: newUser });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
// ----------------------------------------------------------------------------
