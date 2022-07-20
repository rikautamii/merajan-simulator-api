const express = require("express");
const {
  getBuildingLocation,
} = require("../controllers/buildingLocationController");

const router = express.Router();

router.post("/", getBuildingLocation);

module.exports = router;
