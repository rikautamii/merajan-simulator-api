const { loadImage, createCanvas, GlobalFonts } = require("@napi-rs/canvas");

GlobalFonts.registerFromPath(
  require("@canvas-fonts/helveticaneue"),
  "Helvetica"
);

class BaliLocationOfDoor {
  getPhilosophy(direction) {
    switch (direction) {
      case "utara":
        return {
          1: {
            bhsBali: "Karogan",
            bhsIndonesia: "wasteful",
            locationValue: "not good",
          },
          2: {
            bhsBali: "Tan Panak",
            bhsIndonesia: "childless",
            locationValue: "not good",
          },
          3: {
            bhsBali: "Nohan",
            bhsIndonesia: "wretched poor",
            locationValue: "not good",
          },
          4: {
            bhsBali: "Kadalih",
            bhsIndonesia: "often slandered",
            locationValue: "not good",
          },
          5: {
            bhsBali: "Kebrahman",
            bhsIndonesia: "hot",
            locationValue: "not good",
          },
          6: {
            bhsBali: "Brahma Stana",
            bhsIndonesia: "hot",
            locationValue: "not good",
          },
          7: {
            bhsBali: "Suka Mageng",
            bhsIndonesia: "very happy",
            locationValue: "good",
          },
          8: {
            bhsBali: "Bagya Sih",
            bhsIndonesia: "loved by happiness",
            locationValue: "good",
          },
          9: {
            bhsBali: "Kageringan",
            bhsIndonesia: "pain",
            locationValue: "not good",
          },
        };
      case "timur":
        return {
          1: {
            bhsBali: "Teka Sih Prih",
            bhsIndonesia: "sadness ",
            locationValue: "not good",
          },
          2: {
            bhsBali: "Kinabhakten",
            bhsIndonesia: "loyalty",
            locationValue: "good",
          },
          3: {
            bhsBali: "Werdhi Guna",
            bhsIndonesia: "growing",
            locationValue: "good",
          },
          4: {
            bhsBali: "Dana Teka",
            bhsIndonesia: "arrival of fortune",
            locationValue: "good",
          },
          5: {
            bhsBali: "Kabrahman",
            bhsIndonesia: "hot",
            locationValue: "not good",
          },
          6: {
            bhsBali: "Dana Werdhi",
            bhsIndonesia: "growing/full of luck",
            locationValue: "good",
          },
          7: {
            bhsBali: "Nohan",
            bhsIndonesia: "wretched poor",
            locationValue: "not good",
          },
          8: {
            bhsBali: "Stri Jahat",
            bhsIndonesia: "evil wife",
            locationValue: "not good",
          },
          9: {
            bhsBali: "Nista",
            bhsIndonesia: "low",
            locationValue: "not good",
          },
        };
      case "selatan":
        return {
          1: {
            bhsBali: "Bhaya Agung",
            bhsIndonesia: "great danger",
            locationValue: "not good",
          },
          2: {
            bhsBali: "Tan Panak",
            bhsIndonesia: "have no children",
            locationValue: "not good",
          },
          3: {
            bhsBali: "Suka Mageng",
            bhsIndonesia: "very happy",
            locationValue: "good",
          },
          4: {
            bhsBali: "Uudan Mas",
            bhsIndonesia: "wealth shrinks",
            locationValue: "not good",
          },
          5: {
            bhsBali: "Brahma Stana",
            bhsIndonesia: "hot",
            locationValue: "not good",
          },
          6: {
            bhsBali: "Dana Werdhi",
            bhsIndonesia: "growing/full of luck",
            locationValue: "good",
          },
          7: {
            bhsBali: "Sugih Bhaya",
            bhsIndonesia: "dangerously rich",
            locationValue: "not good",
          },
          8: {
            bhsBali: "Teka Werdhi",
            bhsIndonesia: "growing love",
            locationValue: "good",
          },
          9: {
            bhsBali: "Kapaten",
            bhsIndonesia: "killed/died",
            locationValue: "not good",
          },
        };
      case "barat":
        return {
          1: {
            bhsBali: "Bhaya Agung",
            bhsIndonesia: "great danger",
            locationValue: "not good",
          },
          2: {
            bhsBali: "Musuh Makweh ",
            bhsIndonesia: "many enemies",
            locationValue: "sangat good",
          },
          3: {
            bhsBali: "Werdhi Mas",
            bhsIndonesia: "growing",
            locationValue: "good",
          },
          4: {
            bhsBali: "Werdhi Guna",
            bhsIndonesia: "growing",
            locationValue: "good",
          },
          5: {
            bhsBali: "Dhanawan",
            bhsIndonesia: "rich but wasteful",
            locationValue: "not good",
          },
          6: {
            bhsBali: "Brahma Stana",
            bhsIndonesia: "hot",
            locationValue: "not good",
          },
          7: {
            bhsBali: "Kinabhakten",
            bhsIndonesia: "loyalty",
            locationValue: "good",
          },
          8: {
            bhsBali: "Piutangan",
            bhsIndonesia: "lots of debt",
            locationValue: "not good",
          },
          9: {
            bhsBali: "Karogo Kala",
            bhsIndonesia: "wasteful",
            locationValue: "not good",
          },
        };
    }
  }

  async getBytesImage(length, direction, url) {
    const width = 856;
    const height = 994;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/default.png"; // Default gambar
    switch (direction) {
      case "utara":
        urlImg = "/images/utara.png";
        break;
      case "timur":
        urlImg = "/images/timur.png";
        break;
      case "selatan":
        urlImg = "/images/selatan.png";
        break;
      case "barat":
        urlImg = "/images/barat.png";
        break;
    }

    // Load image dari path static backend
    const image = await loadImage(`${url}${urlImg}`);

    context.drawImage(image, 0, 0, width, height);
    let x, y;
    const text = `${length.toFixed(1)} m`;
    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    switch (direction) {
      case "utara":
        const divison = parseFloat(length);

        x = 3;
        y = 120;
        const initialValue = 0;
        context.fillText(initialValue.toFixed(0), x, y);
        console.log(`Current value: ${initialValue.toFixed(0)}`);

        for (let i = 0; i < 9; i++) {
          const currentValue = ((i + 1) * divison).toFixed(2);
          console.log(`Current value: ${currentValue}`);

          x = 70 + i * 96;
          y = 120;
          context.textAlign = "center";
          context.fillText(currentValue, x, y);
        }
        break;

      case "timur":
        const divisiontimur = parseFloat(length);

        x = 730;
        y = 20;
        const initialValuet = 0;
        context.fillText(initialValuet.toFixed(0), x, y);
        console.log(`Current value: ${initialValuet.toFixed(0)}`);

        for (let i = 0; i < 9; i++) {
          const currentValue = ((i + 1) * divisiontimur).toFixed(2);
          console.log(`Current value: ${currentValue}`);

          x = width - 100;
          y = 100 + i * 108;
          context.textAlign = "right";
          context.fillText(currentValue, x, y);
        }
        break;

      case "selatan":
        const divisionselatan = parseFloat(length);

        x = 835;
        y = 895;
        const initialValues = 0;
        context.fillText(initialValues.toFixed(0), x, y);
        console.log(`Current value: ${initialValues.toFixed(0)}`);

        for (let i = 0; i < 9; i++) {
          const currentValue = ((i + 1) * divisionselatan).toFixed(2);
          console.log(`Current value: ${currentValue}`);

          x = width - (i + 0.63) * 96; // Posisi horizontal
          y = height - 100; // Posisi vertikal tetap
          context.textAlign = "center";
          context.fillText(currentValue, x, y);
        }
        break;

      case "barat":
        const divisionbarat = parseFloat(length);

        x = 100;
        y = 990;
        const initialValueb = 0;
        context.fillText(initialValueb.toFixed(0), x, y);
        console.log(`Current value: ${initialValueb.toFixed(0)}`);

        for (let i = 0; i < 9; i++) {
          const currentValue = ((i + 1) * divisionbarat).toFixed(2);
          console.log(`Current value: ${currentValue}`);

          x = 100; // Posisi horizontal tetap
          y = height - (i + 0.8) * 108; // Posisi vertikal
          context.textAlign = "left";
          context.fillText(currentValue, x, y);
        }
        break;

      default:
        // Jika arah tidak dikenal, tampilkan satu teks di tengah
        x = width / 2;
        y = height / 2;
        context.textAlign = "center";
        context.fillText(text, x, y);
        break;
    }

    // Log koordinat untuk debugging
    console.log(`Direction: ${direction}, x: ${x}, y: ${y}`);

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getLocationOfDoor(yardLength, homeDirection, url) {
    let length = yardLength / 9;

    return {
      bytesImg: await this.getBytesImage(length, homeDirection, url),
      philosophy: this.getPhilosophy(homeDirection),
    };
  }
}

const baliLocationOfDoor = new BaliLocationOfDoor();
module.exports = baliLocationOfDoor;
