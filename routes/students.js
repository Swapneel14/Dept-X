const express = require("express");
const router = express.Router();

const wrap = require("../utils/wrap.js");
const studentsController = require("../controllers/studentsController.js");

// All Students
router.get("/students", wrap(studentsController.listStudents));

module.exports = router;

