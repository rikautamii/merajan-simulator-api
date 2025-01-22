const express = require("express");
const port = 9000;
const cors = require("cors");
const landDirectionRoutes = require("./routes/landDirection");
const locationDoorRoutes = require("./routes/locationDoor");
const buildingLocationRoutes = require("./routes/buildingLocation");
const path = require("path");

// express app
const app = express();

app.use(express.static(path.join(__dirname, "public")))

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
app.use("/api/locationDoor", locationDoorRoutes);
app.use("/api/buildingLocation", buildingLocationRoutes);

// listen for request
app.listen(port, () => {
  console.log(`listening on port ${port}!!!`);
});
