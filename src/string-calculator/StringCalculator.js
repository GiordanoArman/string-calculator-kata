const _ = require(`lodash`);

class StringCalculator {

  add(numbers) {
    if (numbers.length <= 0)
      return 0;
    return parseInt(
      this.parse(numbers).map(v => parseFloat(v)).reduce((a, b) => a + b, 0));
  }

  parse(numbers) {
    let value = _.flattenDeep(numbers.split(`,`).map(v => v.split(`\n`)));
    const delimiter = this.getDelimiter(numbers);
    if (delimiter) {
      value = value.map(v => v.split(delimiter)).slice(1);
    }
    value = _.flattenDeep(value);
    // console.log(`value`, value);
    return value;
  }

  getDelimiter(numbers) {
    if ((numbers[0] === `/`) && (numbers[1] === `/`)) {
      const end = numbers.indexOf(`\n`);
      if (end > 2) {
        return numbers.substring(2, end);
      }
    }
    return null;
  }

}

module.exports = StringCalculator;