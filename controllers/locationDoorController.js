const LocationDoor = require("../models/BaliLocationOfDoor");

const getLocationDoor = async (req, res) => {
  const { yardLength, landDirection } = req.body;
  let url = "";
  const hostname = req.hostname;
  const protocol = req.protocol;

  if (hostname === "localhost") {
    url = `${protocol}://${hostname}:9000`;
  } else {
    url = `${protocol}://${hostname}`;
  }

  const locationDoor = await LocationDoor.getLocationOfDoor(
    yardLength,
    landDirection,
    url
  );

  res.status(200).json(locationDoor);
};

module.exports = {
  getLocationDoor,
};
