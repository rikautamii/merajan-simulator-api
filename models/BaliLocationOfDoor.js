const fs = require("fs");

const { loadImage, createCanvas } = require("canvas");

class BaliLocationOfDoor {
  getPhilosophy(direction) {
    switch (direction) {
      case "utara":
        return {
          1: {
            bhsBali: "polih arta saking tan becik",
            bhsIndonesia: "mendapat harta dari cara tidak baik",
            locationValue: "tidak baik",
          },
          2: {
            bhsBali: "sugih",
            bhsIndonesia: "kaya",
            locationValue: "sangat baik",
          },
          3: {
            bhsBali: "madue santana",
            bhsIndonesia: "memiliki anak",
            locationValue: "baik",
          },
          4: {
            bhsBali: "edalemin anak",
            bhsIndonesia: "kasihan pada orang lain",
            locationValue: "baik",
          },
          5: {
            bhsBali: "sering meweh",
            bhsIndonesia: "sering susah",
            locationValue: "tidak baik",
          },
          6: {
            bhsBali: "sugih",
            bhsIndonesia: "kaya",
            locationValue: "sangat baik",
          },
          7: {
            bhsBali: "sugih saking rabi",
            bhsIndonesia: "kaya karena istri",
            locationValue: "baik",
          },
          8: {
            bhsBali: "meweh saking anak lian",
            bhsIndonesia: "susah karena orang lain",
            locationValue: "tidak baik",
          },
          9: {
            bhsBali: "sering meweh",
            bhsIndonesia: "sering susah/sakit",
            locationValue: "tidak baik",
          },
        };
      case "timur":
        return {
          1: {
            bhsBali: "maduwe sentana",
            bhsIndonesia: "memiliki anak",
            locationValue: "baik",
          },
          2: {
            bhsBali: "sering meweh",
            bhsIndonesia: "sering susah",
            locationValue: "tidak baik",
          },
          3: {
            bhsBali: "kawon",
            bhsIndonesia: "tidak baik",
            locationValue: "tidak baik",
          },
          4: {
            bhsBali: "wikan",
            bhsIndonesia: "pintar",
            locationValue: "sangat baik",
          },
          5: {
            bhsBali: "kapaten",
            bhsIndonesia: "meninggal",
            locationValue: "tidak baik",
          },
          6: {
            bhsBali: "rahayu",
            bhsIndonesia: "selamat",
            locationValue: "sangat baik",
          },
          7: {
            bhsBali: "sugih",
            bhsIndonesia: "kaya",
            locationValue: "sangat baik",
          },
          8: {
            bhsBali: "kaceda",
            bhsIndonesia: "celaka",
            locationValue: "tidak baik",
          },
          9: {
            bhsBali: "suka",
            bhsIndonesia: "senang",
            locationValue: "sangat baik",
          },
        };
      case "selatan":
        return {
          1: {
            bhsBali: "manggihdosa",
            bhsIndonesia: "mendapatkan dosa",
            locationValue: "tidak baik",
          },
          2: {
            bhsBali: "polihistri",
            bhsIndonesia: "mendapatkan istri",
            locationValue: "baik",
          },
          3: {
            bhsBali: "polihbhoga",
            bhsIndonesia: "mendapatkan makanan",
            locationValue: "sangat baik",
          },
          4: {
            bhsBali: "kasiddhan",
            bhsIndonesia: "mampu, berhasil",
            locationValue: "sangat baik",
          },
          5: {
            bhsBali: "sadarana",
            bhsIndonesia: "hidup sederhana",
            locationValue: "baik",
          },
          6: {
            bhsBali: "sering meweh",
            bhsIndonesia: "sering susah",
            locationValue: "tidak baik",
          },
          7: {
            bhsBali: "bingbang",
            bhsIndonesia: "ragu",
            locationValue: "tidak baik",
          },
          8: {
            bhsBali: "rahayu",
            bhsIndonesia: "selamat",
            locationValue: "sangat baik",
          },
          9: {
            bhsBali: "kapandungan",
            bhsIndonesia: "kecurian",
            locationValue: "tidak baik",
          },
        };
      case "barat":
        return {
          1: {
            bhsBali: "sering sungkan",
            bhsIndonesia: "sering sakit",
            locationValue: "tidak baik",
          },
          2: {
            bhsBali: "kerahuang anak lingsir",
            bhsIndonesia: "kedatangan orang tua (suci)",
            locationValue: "sangat baik",
          },
          3: {
            bhsBali: "masantana",
            bhsIndonesia: "memiliki anak",
            locationValue: "baik",
          },
          4: {
            bhsBali: "kasorang rabi",
            bhsIndonesia: "direndahkan istri/suami",
            locationValue: "tidak baik",
          },
          5: {
            bhsBali: "kapandungan",
            bhsIndonesia: "kecurian",
            locationValue: "tidak baik",
          },
          6: {
            bhsBali: "suka",
            bhsIndonesia: "senang",
            locationValue: "sangat baik",
          },
          7: {
            bhsBali: "rahayu",
            bhsIndonesia: "selamat",
            locationValue: "sangat baik",
          },
          8: {
            bhsBali: "manggih dosa saking oka",
            bhsIndonesia: "mendapatkan dosa dari anak",
            locationValue: "tidak baik",
          },
          9: {
            bhsBali: "tiwas",
            bhsIndonesia: "miskin",
            locationValue: "tidak baik",
          },
        };
    }
  }

  async getBytesImage(length, direction) {
    const width = 856;
    const height = 994;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "https://iili.io/wSzvHJ.md.png";
    switch (direction) {
      case "utara":
        urlImg = "https://iili.io/wSzvHJ.md.png";
        break;
      case "timur":
        urlImg = "https://iili.io/wSzroN.md.png";
        break;
      case "selatan":
        urlImg = "https://iili.io/wSz4VI.md.png";
        break;
      case "barat":
        urlImg = "https://iili.io/wSziKX.md.png";
        break;
    }

    const image = await loadImage(urlImg);

    context.drawImage(image, 0, 0, width, height);
    const text = `${length.toFixed(1)} m`;

    context.fillStyle = "#FFFFFF";
    context.font = "bold 16pt Menlo";

    let lenghtXPosition = 8;
    for (let i = 0; i < 9; i++) {
      context.fillText(text, lenghtXPosition, 40);
      lenghtXPosition += 96;
    }

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getLocationOfDoor(yardLength, homeDirection) {
    let length = yardLength / 9;

    // let location = [];
    // for (let i = 0; i < 9; i++) {
    //   location.push({
    //     length: length,
    //     philosophy: this.getPhilosophy(homeDirection),
    //   });
    // }
    // return location;

    return {
      bytesImg: await this.getBytesImage(length, homeDirection),
      philosophy: this.getPhilosophy(homeDirection),
    };
  }
}

const baliLocationOfDoor = new BaliLocationOfDoor();
module.exports = baliLocationOfDoor;

// let location = baliLocationOfDoor.getLocationOfDoor(15, "selatan");
// console.log(location);
