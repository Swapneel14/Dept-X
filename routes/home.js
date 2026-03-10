const express = require("express");
const router = express.Router();

const wrap = require("../utils/wrap.js");
const homeController = require("../controllers/homeController.js");
const noticeController = require("../controllers/noticeController.js");

// Root Route
router.get("/", wrap(homeController.renderHome));
router.post("/", wrap(noticeController.createNotice));
// Delete notice (simple POST)
router.post("/notices/:id", wrap(noticeController.deleteNotice));

router.get("/addnotices", wrap(noticeController.renderAddNotice));

module.exports = router;

