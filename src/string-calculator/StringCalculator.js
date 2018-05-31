const _ = require(`lodash`);

class StringCalculator {

  /**
   * @param {*} numbers - String representing a list of numbers
   * @returns integer
   */
  add(numbers) {
    if (numbers.length <= 0)
      return 0;

    const values = this.parse(numbers);
    
    this.negativesCheck(values);
      
    return this.sumWithoutBiggerThan1000(values);
  }

  /**
   * @param {*} values - Array of real numbers
   * @throws Error
   * @returns undefined
   * checks whether negative numbers are present in the values array
   */
  negativesCheck(values) {
    const negatives = values.filter(v => v < 0);
    if (negatives.length > 0)
      throw new Error(`negatives not allowed: ` + negatives.join(`, `));
  }

  /**
   * @param {*} values - Array of real numbers
   * @returns integer
   * sums the numbers in value, but only those that are smaller than or equal to 1000
   */
  sumWithoutBiggerThan1000(values) {
    return parseInt(values.reduce((a, b) => b > 1000 ? a : (a + b), 0));
  }

  /**
   * @param {*} numbers - String
   * @returns Array of real numbers
   * extracts the numbers present in the numbers String
   */
  parse(numbers) {
    let value = _.flattenDeep(numbers.split(`,`).map(v => v.split(`\n`)));
    const delimiter = this.getDelimiter(numbers);
    if (delimiter) {
      value = _.flatten(value.map(v => v.split(delimiter)).slice(1));
    }
    // console.log(`value`, value);
    return value.map(v => parseFloat(v));
  }

  /**
   * @param {*} numbers - String
   * @returns null or String
   * returns a custom delimiter (String) if it is present in the numbers String
   * otherwise returns null
   */
  getDelimiter(numbers) {
    if ((numbers[0] === `/`) && (numbers[1] === `/`)) {
      const end = numbers.indexOf(`\n`);
      if (end > 2) return numbers.substring(2, end);
    }
    return null;
  }

}

module.exports = StringCalculator;