const LocationDoor = require("../models/BaliLocationOfDoor");

const getLocationDoor = async (req, res) => {
  const { yardLength, landDirection } = req.body;
  let url = "";

  if (process.env.NODE_ENV === "production") {
    url = `https://bali-building-simulator-api-7n41.vercel.app`;
  } else {
    url = `http://localhost:9000`;
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
