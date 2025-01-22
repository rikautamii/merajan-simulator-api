const BuildingLocation = require("../models/BaliBuildingLocation");

const getBuildingLocation = async (req, res) => {
  const { landDirection, footLength, sideFootLength, BaliOrientation } = req.body;

  const buildingLocation = await BuildingLocation.getBuildingLocation(
    landDirection,
    footLength,
    sideFootLength,
    BaliOrientation
  );

  res.status(200).json(buildingLocation);
};

module.exports = {
  getBuildingLocation,
};
