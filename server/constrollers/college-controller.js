const College = require("../models/college-model");
const jwt = require("jsonwebtoken");
const Location = require("../models/location-model");
// const dbConnect = require("../lib/dbConnect")

exports.addCollege = async (req, res) => {
  const { collegeName, collegeCode, collegeEmail, address } = req.body;

  try {
    const new_college = await College.create({
      collegeName,
      collegeCode,
      collegeEmail,
      address,
    });

    res.status(200).json({
      success: true,
      new_college,
      message: "college created successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: "Invalid token 2", error: err });
  }
};

exports.getCollegeDetails = async (req, res) => {
  const { collegeCode } = req.query;

  try {
    const found_details = await College.findOne({ collegeCode: collegeCode });

    res.status(200).json({
      success: true,
      found_details,
      message: "college Details",
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: "Invalid token 2", error: err });
  }
};

exports.getColleges = async (req, res) => {
  const { collegeCode } = req.query;

  try {
    const found_colleges = await College.find({});

    res.status(200).json({
      success: true,
      found_colleges,
      message: "college Details",
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: "Error in College", error: err });
  }
};

exports.addCollegeLogo = async (req, res) => {
  const LogoUrl = req.body.LogoUrl;
  const collegeCode = req.body.collegeCode;

  try {
    const updatedCollege = await College.findOneAndUpdate(
      { collegeCode: collegeCode },
      { collegeImgUrl: LogoUrl },
      { new: true }
    );

    res.status(200).json({
      success: true,
      updatedCollege,
      message: "college Logo Details",
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: "Error in College", error: err });
  }
};

//........tody ................

exports.getCollegeAddress = async (req, res) => {
  let clgCode = req.query.collegeCode;

  try {
    const found_collegeAdd = await College.find({ collegeCode: clgCode });

    res.status(200).json({
      success: true,
      found_collegeAdd,
      message: "college Details Address",
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: "Error in College", error: err });
  }
};
