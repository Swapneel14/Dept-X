const express = require("express");
const router = express.Router();

const resourcesController = require("../controllers/resourcesController.js");

// Resources Route
router.get("/resources", resourcesController.renderResources);

module.exports = router;

