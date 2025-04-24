const express = require("express");
const router = express.Router();

const {signUp , sendOtp , signIn} = require("../controllers/Auth");

//......................Authentication routes..............
router.post("/signin",signIn);

router.post("/signup",signUp);

router.post("/sendotp",sendOtp);


module.exports = router;  