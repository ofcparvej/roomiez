const express = require("express");
const router = express.Router();

const {
  addCollege,
  getCollegeDetails,
  getColleges,
  addCollegeLogo,
  getCollegeAddress,
} = require("../constrollers/college-controller");

router.post("/college", addCollege);
router.get("/college", getCollegeDetails);
router.get("/colleges", getColleges);
router.post("/addlogo", addCollegeLogo);
router.get("/getcollegeaddress", getCollegeAddress);

module.exports = router;
