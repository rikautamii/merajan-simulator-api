const BuildingLocation = require("../models/BaliBuildingLocation");

const getBuildingLocation = async (req, res) => {
  const { landDirection, footLength, sideFootLength, BaliOrientation } =
    req.body;
  let url = "";

  if (process.env.NODE_ENV === "production") {
    url = `https://bali-building-simulator-api-7n41.vercel.app`;
  } else {
    url = `http://localhost:9000`;
  }

  const buildingLocation = await BuildingLocation.getBuildingLocation(
    landDirection,
    footLength,
    sideFootLength,
    BaliOrientation,
    url
  );

  res.status(200).json(buildingLocation);
};

module.exports = {
  getBuildingLocation,
};
