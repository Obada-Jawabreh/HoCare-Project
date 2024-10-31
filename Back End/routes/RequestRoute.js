const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/RequestController");
const auth = require("../middleware/authMiddleware");
const upload = require("../config/multer-config");

router.post(
  "/new",
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "certificate", maxCount: 1 },
    { name: "licenseToPractice", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  auth,
  applicationController.createApplication
);

module.exports = router;
