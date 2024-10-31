const express = require("express");
const router = express.Router();
const checkoutController = require("../controllers/checkoutController");
const auth = require("../middleware/authMiddleware");
const upload = require("../config/multer-config");

router.get("/appointment/:id", checkoutController.appointment);
router.get("/service/:id", checkoutController.service);
router.post("/confirm-payment", auth, checkoutController.confirmPayment);

module.exports = router;
