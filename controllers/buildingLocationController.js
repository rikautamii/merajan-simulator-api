const BuildingLocation = require("../models/BaliBuildingLocation");

const getBuildingLocation = async (req, res) => {
  const { sanggah, alengkat, atebah, panjang, lebar } =
    req.body;
  let url = "";

  if (process.env.NODE_ENV === "production") {
    // url = `https://bali-building-simulator-api-7n41.vercel.app`;
    url = `http://localhost:9000`;
  } else {
    url = `http://localhost:9000`;
  }

  const buildingLocation = await BuildingLocation.getBuildingLocation(
    sanggah,
    alengkat,
    atebah,
    panjang,
    lebar,
    url
  );

  res.status(200).json(buildingLocation);
};

module.exports = {
  getBuildingLocation,
};
