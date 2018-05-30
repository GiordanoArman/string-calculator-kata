const _ = require(`lodash`);

class StringCalculator {

  add(numbers) {
    if (numbers.length <= 0)
      return 0;
    return parseInt(
      this.parse(numbers).map(v => parseFloat(v)).reduce((a, b) => a + b, 0));
  }

  parse(list) {
    return _.flattenDeep(list.split(`,`).map(v => v.split(`\n`)));
  }

}

module.exports = StringCalculator;