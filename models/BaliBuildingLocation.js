const { loadImage, createCanvas } = require("canvas");

class BaliBuildingLocation {
  async getImageNorthSide(footLength, sideFootLength) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    const urlImg = "https://iili.io/SLcpn9.md.png";

    const image = await loadImage(urlImg);

    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      330
    );

    // bale daje -> bale dangin
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      440
    );

    // bale daje -> bale kelod
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      420,
      520
    );

    // bale kauh -> bale kangin
    context.fillText(
      `${((36 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      480,
      580
    );

    // bale kelod -> dapur
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      260,
      860
    );

    // bale kelod -> dapur
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      960
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSide(footLength, sideFootLength) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    const urlImg = "https://iili.io/SLcyGe.md.png";

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
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    const urlImg = "https://iili.io/SLl96u.md.png";

    const image = await loadImage(urlImg);

    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
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
      490,
      420
    );

    // bale kelod -> dapur
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      260,
      690
    );

    // bale kelod -> dapur
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      790
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSide(footLength, sideFootLength) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    const urlImg = "https://iili.io/SLlJ3b.md.png";

    const image = await loadImage(urlImg);

    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      730,
      160
    );

    // bale daje -> bale dangin
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      620,
      280
    );

    // bale daje -> bale kelod
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      360
    );

    // bale kauh -> bale kangin
    context.fillText(
      `${((36 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      660,
      420
    );

    // bale kelod -> dapur
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      430,
      690
    );

    // bale kelod -> dapur
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      790
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
