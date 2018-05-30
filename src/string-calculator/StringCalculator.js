const _ = require(`lodash`);

class StringCalculator {

  add(numbers) {
    if (numbers.length <= 0)
      return 0;

    const values = this.parse(numbers).map(v => parseFloat(v));
    
    const negatives = values.filter(v => v < 0);
    if (negatives.length > 0)
      throw new Error(`negatives not allowed: ` + negatives.join(`, `));
      
    return parseInt(values.reduce((a, b) => b > 1000 ? a : (a + b), 0));
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