const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const auth = require("./../middleware/authMiddleware");
const upload = require("../config/multer-config");

router.post("/add", auth, contactController.addContact);

module.exports = router;
