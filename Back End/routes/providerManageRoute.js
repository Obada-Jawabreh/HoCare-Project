const express = require("express");
const router = express.Router();
const providerManageController = require("../controllers/providerManageController");
const auth = require("./../middleware/authMiddleware");
const upload = require("../config/multer-config");

router.post("/add", auth, providerManageController.AddAppointments);

module.exports = router;
