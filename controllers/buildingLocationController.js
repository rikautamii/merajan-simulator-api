const BuildingLocation = require("../models/BaliBuildingLocation");

const getBuildingLocation = async (req, res) => {
  const { landDirection, footLength, sideFootLength } = req.body;

  const buildingLocation = await BuildingLocation.getBuildingLocation(
    landDirection,
    footLength,
    sideFootLength
  );

  res.status(200).json(buildingLocation);
};

module.exports = {
  getBuildingLocation,
};
