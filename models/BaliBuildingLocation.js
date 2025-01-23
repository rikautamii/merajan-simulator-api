const { loadImage, createCanvas } = require("@napi-rs/canvas");

class BaliBuildingLocation {
  async getImageNorthSide(footLength, sideFootLength, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataUtara.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      310
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      160,
      320
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((29 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      420,
      675
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      480,
      580
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      460,
      230
    );

    // bale daja -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      420
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      90,
      770
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      240,
      750
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      265,
      900
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      30,
      180
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSideNorthBali(footLength, sideFootLength, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataUtaraBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      910
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      130,
      880
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((29 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      415,
      735
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      630
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      460,
      1020
    );

    // bale daja -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      800
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      70,
      480
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      250,
      460
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      565,
      300
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      50,
      1040
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSide(footLength, sideFootLength) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataSelatan.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      160
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      170,
      160
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((29 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      420,
      360
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      480,
      420
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      260,
      560
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      260,
      760
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      80,
      570
    );

    // bale dauh -> bale daja : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      210,
      275
    );

    // bale daje -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      60
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      30,
      20
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSideNorthBali(footLength, sideFootLength) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataSelatanBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      740
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      180,
      720
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((29 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      420,
      360
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      370,
      470
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      260,
      280
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      160
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      80,
      340
    );

    // bale dauh -> bale daja : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      230,
      655
    );

    // bale daje -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      465,
      855
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      70,
      865
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageEastSide(footLength, sideFootLength) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataTimur.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      150
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      160,
      160
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      220,
      260
    );

    // bale daje -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      260,
      580
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      260,
      740
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      100,
      610
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((29 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      420,
      360
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      490,
      420
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      35,
      20
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      360,
      60
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageEastSideNorthBali(footLength, sideFootLength) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataTimurBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      740
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      160,
      710
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      230,
      660
    );

    // bale daje -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      380
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      190
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      80,
      310
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((29 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      410,
      360
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      370,
      470
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      55,
      865
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      860
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSide(footLength, sideFootLength) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataBarat.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      730,
      160
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      330,
      160
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      610,
      60
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      20
    );

    // dapur -> bale dauh : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      270,
      620
    );

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)}`,
      440,
      550
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      420,
      750
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      280
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((29 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      360
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      660,
      410
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSideNorthBali(footLength, sideFootLength) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataBaratBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Menlo";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      730,
      750
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      330,
      740
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      550,
      855
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      230,
      865
    );

    // dapur -> bale dauh : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      270,
      320
    );

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      350
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      740,
      220
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      395,
      650
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((29 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      585,
      360
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      545,
      460
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getBuildingLocation(
    direction,
    footLength,
    sideFootLength,
    orientation,
    url
  ) {
    if (direction == "utara" && orientation == "baliutara") {
      return {
        bytesImg: await this.getImageNorthSideNorthBali(
          footLength,
          sideFootLength,
          url
        ),
      };
    } else if (direction == "utara" && orientation == "baliselatan") {
      return {
        bytesImg: await this.getImageNorthSide(footLength, sideFootLength, url),
      };
    } else if (direction == "timur" && orientation == "baliutara") {
      return {
        bytesImg: await this.getImageEastSideNorthBali(
          footLength,
          sideFootLength,
          url
        ),
      };
    } else if (direction == "timur" && orientation == "baliselatan") {
      return {
        bytesImg: await this.getImageEastSide(footLength, sideFootLength, url),
      };
    } else if (direction == "barat" && orientation == "baliutara") {
      return {
        bytesImg: await this.getImageWestSideNorthBali(
          footLength,
          sideFootLength,
          url
        ),
      };
    } else if (direction == "barat" && orientation == "baliselatan") {
      return {
        bytesImg: await this.getImageWestSide(footLength, sideFootLength, url),
      };
    } else if (direction == "selatan" && orientation == "baliutara") {
      return {
        bytesImg: await this.getImageSouthSideNorthBali(
          footLength,
          sideFootLength,
          url
        ),
      };
    } else {
      return {
        bytesImg: await this.getImageSouthSide(footLength, sideFootLength, url),
      };
    }
  }
}

const baliBuildingLocation = new BaliBuildingLocation();
module.exports = baliBuildingLocation;
