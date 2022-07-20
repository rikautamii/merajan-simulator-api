const express = require("express");
const port = process.env.PORT || 4000;
const cors = require("cors");
const landDirectionRoutes = require("./routes/landDirection");
const locationDoorRoutes = require("./routes/locationDoor");
const buildingLocationRoutes = require("./routes/buildingLocation");

// express app
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

// midlleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/landDirection", landDirectionRoutes);
app.use("/api/locationDoor", locationDoorRoutes);
app.use("/api/buildingLocation", buildingLocationRoutes);

// listen for request
app.listen(port, () => {
  console.log(`listening on port ${port}!!!`);
});
