const _ = require(`lodash`);

const MAX = (Number.MAX_SAFE_INTEGER - 1) / 2;
const MIN = (Number.MIN_SAFE_INTEGER + 1) / 2;

class StringCalculator {

  static getRandom() {
    return _.random(MIN, MAX);
  }
  
  add(numbers) {
    if (numbers.length <= 0)
      return 0;
    const value = 
      numbers.split(`,`).map(v => parseFloat(v)).reduce((a, b) => a + b, 0);
    return parseInt(value, 10);
  }

}

module.exports = StringCalculator;