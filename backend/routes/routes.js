/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const express = require("express");
const {
  loginStudent,
  signupStudent,
  updateStudentHistory,
  getStudentHistory,
} = require("../controllers/controllers");
const requireAuth = require("../middlewares/authentication");

const router = express.Router();

router.post("/login", loginStudent);
router.post("/signup", signupStudent);
router.get("/history", requireAuth, getStudentHistory);
router.post("/history", requireAuth, updateStudentHistory);
module.exports = router;
