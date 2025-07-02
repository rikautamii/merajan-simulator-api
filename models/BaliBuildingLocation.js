const { loadImage, createCanvas, GlobalFonts } = require("@napi-rs/canvas");

GlobalFonts.registerFromPath(
  require("@canvas-fonts/helveticaneue"),
  "Helvetica"
);

class BaliBuildingLocation {
  async getImageNorthSide1(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/satu.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide15(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/satu.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide17(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/satu.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide2(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/dua.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide25(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/dua.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide27(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/dua.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide3(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tiga.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      185,
      50
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide35(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tiga.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      185,
      50
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide37(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tiga.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      185,
      50
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide4(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/empat.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      185,
      50
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      22,
      180
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide45(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/empat.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      185,
      50
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      22,
      180
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide47(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/empat.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      185,
      50
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      22,
      180
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide5(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/lima.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      170,
      50
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      22,
      180
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      85
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      215,
      90
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      285,
      50
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * alengkat + atebah) / 100).toFixed(1)} m`,
      285,
      150
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide55(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/lima.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      170,
      50
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      22,
      180
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      85
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      215,
      90
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      285,
      50
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((5 * alengkat + atebah) / 100).toFixed(1)} m`,
      285,
      150
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide57(sanggah, alengkat, atebah, panjang, lebar, url) {
    const width = 590;
    const height = 389;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/lima.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 8pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      185
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      322,
      285
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      282,
      255
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      290,
      335
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      170,
      50
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      22,
      180
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      320,
      85
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      215,
      90
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      285,
      50
    );

    // merajan -> bale daja : Guru
    context.fillText(
      `${((7 * alengkat + atebah) / 100).toFixed(1)} m`,
      285,
      150
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getBuildingLocation(
    sanggah,
    alengkat,
    atebah,
    panjang,
    lebar,
    url
  ) {
    if (
      ["satu", "dua", "tiga", "empat", "lima"].includes(sanggah) &&
      (
        (panjang < 6 && lebar < 7) ||
        (panjang < 7 && lebar < 6) ||
        (panjang === lebar)
      )
    ) {
      return { error: "Ukuran lahan tidak valid. Lahan harus memiliki ukuran minimal 6x7 atau 7x6, dan tidak diperbolehkan memiliki panjang dan lebar yang sama." }; }
    else if (sanggah == "satu" && (panjang*lebar >= 42)  && (panjang*lebar < 110)) {
      return {
        bytesImg: await this.getImageNorthSide1(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    } 
    else if (sanggah == "satu" && (panjang*lebar >= 110)  && (panjang*lebar < 156)) {
      return {
        bytesImg: await this.getImageNorthSide15(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    } 
    else if (sanggah == "satu" && (panjang*lebar >= 156)  && (panjang*lebar < 500)) {
      return {
        bytesImg: await this.getImageNorthSide17(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    } 
    else if (sanggah == "dua" && (panjang*lebar >= 42)  && (panjang*lebar < 110)) {
      return {
        bytesImg: await this.getImageNorthSide2(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    }
    else if (sanggah == "dua" && (panjang*lebar >= 110)  && (panjang*lebar < 156)) {
      return {
        bytesImg: await this.getImageNorthSide25(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    } 
    else if (sanggah == "dua" && (panjang*lebar >= 156)  && (panjang*lebar < 500)) {
      return {
        bytesImg: await this.getImageNorthSide27(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    }
    else if (sanggah == "tiga" && (panjang*lebar >= 42)  && (panjang*lebar < 110)) {
      return {
        bytesImg: await this.getImageNorthSide3(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    }
    else if (sanggah == "tiga" && (panjang*lebar >= 110)  && (panjang*lebar < 156)) {
      return {
        bytesImg: await this.getImageNorthSide35(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    } 
    else if (sanggah == "tiga" && (panjang*lebar >= 156)  && (panjang*lebar < 500)) {
      return {
        bytesImg: await this.getImageNorthSide37(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    }
    else if (sanggah == "empat" && (panjang*lebar >= 42)  && (panjang*lebar < 110)) {
      return {
        bytesImg: await this.getImageNorthSide4(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    }
    else if (sanggah == "empat" && (panjang*lebar >= 110)  && (panjang*lebar < 156)) {
      return {
        bytesImg: await this.getImageNorthSide45(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    } 
    else if (sanggah == "empat" && (panjang*lebar >= 156)  && (panjang*lebar < 500)) {
      return {
        bytesImg: await this.getImageNorthSide47(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    }
    else if (sanggah == "lima" && (panjang*lebar >= 42)  && (panjang*lebar < 110)) {
      return {
        bytesImg: await this.getImageNorthSide5(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    }
    else if (sanggah == "lima" && (panjang*lebar >= 110)  && (panjang*lebar < 156)) {
      return {
        bytesImg: await this.getImageNorthSide55(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    } 
    else if (sanggah == "lima" && (panjang*lebar >= 156)  && (panjang*lebar < 500)) {
      return {
        bytesImg: await this.getImageNorthSide57(
          sanggah,
          alengkat,
          atebah,
          panjang,
          lebar, 
          url
        ),
      };
    }
    else {
      return {
        bytesImg: await this.getImageNorthSide1(sanggah, alengkat, atebah, panjang, lebar, url),
      };
    }
   }
 }


const baliBuildingLocation = new BaliBuildingLocation();
module.exports = baliBuildingLocation;
