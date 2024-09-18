const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
// const { auth, checkAuthStatus } = require('./../middleware/authMiddleware');
const  auth = require('./../middleware/authMiddleware');


router.post("/register/user", userController.registerUser);
router.post("/login/user", userController.loginUser);

// router.get('/auth/check', checkAuthStatus);

router.post('/logout', (req, res) => {
    res.clearCookie('token'); 
    res.status(200).json({ message: 'Logged out successfully' });
  });

  router.get("/data/user",auth ,userController.getUserData);



module.exports = router;
