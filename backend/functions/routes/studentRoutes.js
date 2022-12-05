/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const express = require("express");
const {
  loginStudent,
  signupStudent,
  updateStudentHistory,
  getStudentHistory,
} = require("../../controllers/studentController");
const router = express.Router();

// @desc    Login Student
// @route   POST /student/login
// @access  Public
router.post("/login", loginStudent);

// @desc    Sign up Student
// @route   POST /student/signup
// @access  Public
router.post("/signup", signupStudent);

// @desc    Get student history
// @route   POST /student/history
// @access  Private
router.post("/history", getStudentHistory);

// @desc    Update student history
// @route   POST /student/updateHistory
// @access  Private
router.post("/updateHistory", updateStudentHistory);
module.exports = router;
