const express = require("express");
const router = express.Router();
const providerController = require("../controllers/providerController");
const auth = require("../middleware/authMiddleware");
const upload = require("../config/multer-config");



router.get("/get", providerController.GetProviders);
router.get("/get/:id", providerController.GetProviderById);
router.get("/services/:id", providerController.GetProviderServices);
router.get("/appointments/:id",  providerController.getAppointments);
router.get("/nursing",  providerController.getNursing);
router.get("/physiotherapy",  providerController.getPhysiotherapy);

module.exports = router;
