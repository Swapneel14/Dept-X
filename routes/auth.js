const express = require("express");
const router = express.Router();

const wrap = require("../utils/wrap.js");
const signupGuard = require("../middleware/signupGuard.js");
const authController = require("../controllers/authController.js");

// Already signed in route
router.get("/signedin/:id", wrap(authController.alreadySignedIn));

// Middleware for signup page
router.use("/signup/:id", wrap(signupGuard));

// Signup Route-GET
router.get("/signup/:id", wrap(authController.renderSignup));

// Signup-Post
router.post("/signup/:id", wrap(authController.signup));

// Login Page-GET
router.get("/login/:id", wrap(authController.renderLogin));

// Profile Page
router.post("/profile/:id", wrap(authController.renderProfile));

// For Viewing a Student Profile
router.get("/view/:id", wrap(authController.viewProfile));

// cgpa route
router.get("/cgpa/:id", wrap(authController.renderCgpa));

// submit-gpa
router.post("/added/:id", wrap(authController.submitCgpa));

module.exports = router;

