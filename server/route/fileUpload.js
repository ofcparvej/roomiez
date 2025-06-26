const express = require("express");
const router = express.Router();

const { imageUpload, addInDb } = require("../constrollers/fileUplaod");

router.post("/imageUpload", imageUpload);

router.post("/imagetodb", addInDb);

module.exports = router;
