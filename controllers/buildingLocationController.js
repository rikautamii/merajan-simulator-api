const BuildingLocation = require("../models/BaliBuildingLocation");

const getBuildingLocation = async (req, res) => {
  const { landDirection, footLength, sideFootLength, BaliOrientation } =
    req.body;
  let url = "";
  const hostname = req.hostname;
  const protocol = req.protocol;

  if (hostname === "localhost") {
    url = `${protocol}://${hostname}:9000`;
  } else {
    url = `${protocol}://${hostname}`;
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
