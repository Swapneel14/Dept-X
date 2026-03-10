const express = require("express");
const router = express.Router();

router.use(require("./home.js"));
router.use(require("./students.js"));
router.use(require("./auth.js"));
router.use(require("./resources.js"));

module.exports = router;

