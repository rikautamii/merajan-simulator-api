const LocationDoor = require("../models/BaliLocationOfDoor");

const getLocationDoor = async (req, res) => {
  const { yardLength, landDirection } = req.body;

  const locationDoor = await LocationDoor.getLocationOfDoor(
    yardLength,
    landDirection
  );

  res.status(200).json(locationDoor);
};

module.exports = {
  getLocationDoor,
};
