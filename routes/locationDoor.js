const express = require("express");
const { getLocationDoor } = require("../controllers/locationDoorController");

const router = express.Router();

router.post("/", getLocationDoor);

module.exports = router;
