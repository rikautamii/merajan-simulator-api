const express = require("express");
const port = 9000;
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
app.use("/", (req, res) => {
  res.json({ message: "Bali Building Simulator API" });
});
app.use("/api/landDirection", landDirectionRoutes);
app.use("/api/locationDoor", locationDoorRoutes);
app.use("/api/buildingLocation", buildingLocationRoutes);

// listen for request
app.listen(port, () => {
  console.log(`listening on port ${port}!!!`);
});
