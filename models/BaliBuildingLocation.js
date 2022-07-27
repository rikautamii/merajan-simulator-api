const { loadImage, createCanvas } = require("canvas");

class BaliBuildingLocation {
  async getImageNorthSide(footLength, sideFootLength) {
    const width = 1238;
    const height = 1025;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    const urlImg = "https://iili.io/S04nZN.md.png";

    const image = await loadImage(urlImg);

    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      290
    );

    // bale daje -> bale dangin
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      400
    );

    // bale daje -> bale kelod
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      420,
      480
    );

    // bale kauh -> bale kangin
    context.fillText(
      `${((36 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      480,
      540
    );

    // bale kelod -> dapur
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      260,
      820
    );

    // bale kelod -> dapur
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      920
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSide(footLength, sideFootLength) {
    const width = 1238;
    const height = 1025;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    const urlImg = "https://iili.io/S04R8G.md.png";

    const image = await loadImage(urlImg);

    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      160
    );

    // bale daje -> bale dangin
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      280
    );

    // bale daje -> bale kelod
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      420,
      360
    );

    // bale kauh -> bale kangin
    context.fillText(
      `${((36 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      480,
      420
    );

    // bale kelod -> dapur
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      260,
      700
    );

    // bale kelod -> dapur
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      800
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageEastSide(footLength, sideFootLength) {
    const width = 1238;
    const height = 1025;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    const urlImg = "https://iili.io/S04Yu4.md.png";

    const image = await loadImage(urlImg);

    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      185
    );

    // bale daje -> bale dangin
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      410,
      320
    );

    // bale daje -> bale kelod
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      410
    );

    // bale kauh -> bale kangin
    context.fillText(
      `${((36 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      480
    );

    // bale kelod -> dapur
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      235,
      795
    );

    // bale kelod -> dapur
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      250,
      910
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSide(footLength, sideFootLength) {
    const width = 1238;
    const height = 1025;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    const urlImg = "https://iili.io/S04ct2.md.png";

    const image = await loadImage(urlImg);

    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      620,
      185
    );

    // bale daje -> bale dangin
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      320
    );

    // bale daje -> bale kelod
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      490,
      410
    );

    // bale kauh -> bale kangin
    context.fillText(
      `${((36 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      480
    );

    // bale kelod -> dapur
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      345,
      795
    );

    // bale kelod -> dapur
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      360,
      910
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getBuildingLocation(direction, footLength, sideFootLength) {
    if (direction == "utara") {
      return {
        bytesImg: await this.getImageNorthSide(footLength, sideFootLength),
      };
    } else if (direction == "timur") {
      return {
        bytesImg: await this.getImageEastSide(footLength, sideFootLength),
      };
    } else if (direction == "barat") {
      return {
        bytesImg: await this.getImageWestSide(footLength, sideFootLength),
      };
    } else {
      return {
        bytesImg: await this.getImageSouthSide(footLength, sideFootLength),
      };
    }
  }
}

const baliBuildingLocation = new BaliBuildingLocation();
module.exports = baliBuildingLocation;
