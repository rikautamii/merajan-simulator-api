const LandDirection = require("../models/BaliHouseDirection");

const getLandDirection = (req, res) => {
  const { pancaWara, saptaWara } = req.body;

  const landDirection = LandDirection.getDirection(pancaWara, saptaWara);

  res.status(200).json(landDirection);
};

module.exports = {
  getLandDirection,
};
