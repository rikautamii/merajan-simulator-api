const express = require("express");
const { getLandDirection } = require("../controllers/landDirectionController");

const router = express.Router();

router.post("/", getLandDirection);

module.exports = router;
