class BaliHouseDirection {
  getUripPancaWara(pancaWara) {
    const urip = {
      umanis: 5,
      paing: 9,
      pon: 7,
      wage: 4,
      kliwon: 8,
    };

    return urip[pancaWara];
  }

  getUripSaptaWara(saptaWara) {
    const urip = {
      redite: 5,
      soma: 4,
      anggara: 3,
      budha: 7,
      wrespati: 8,
      sukra: 6,
      saniscara: 9,
    };

    return urip[saptaWara];
  }

  getDirectionByTotalUrip(total) {
    const direction = {
      7: ["Selatan", "Timur"],
      8: ["Selatan", "Timur"],
      9: ["Utara", "Timur"],
      10: ["Utara", "Timur"],
      11: ["Barat"],
      12: ["Selatan", "Barat"],
      13: ["Selatan", "Timur"],
      14: ["Utara", "Timur"],
      15: ["Barat"],
      16: ["Barat"],
      17: ["Selatan", "Barat"],
      18: ["Selatan", "Timur"],
    };

    return direction[total];
  }

  getDirection(pancaWara, saptaWara) {
    let uripPancaWara = this.getUripPancaWara(pancaWara);
    let uripSaptaWara = this.getUripSaptaWara(saptaWara);
    let totalUrip = uripPancaWara + uripSaptaWara;
    let direction = this.getDirectionByTotalUrip(totalUrip);

    return direction;
  }
}

const baliHouseDirection = new BaliHouseDirection();

module.exports = baliHouseDirection;
// let direction = baliHouseDirection.getDirection("wage", "redite");
// console.log(direction);
