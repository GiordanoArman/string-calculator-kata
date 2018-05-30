const {
  IllegalArgumentException } = rootRequire(`errors`);
const _ = require(`lodash`);

class StringCalculator {
  
  add(numbers) {
    if (!_.isString(numbers)) {
      throw new IllegalArgumentException(
        `first argument should be string, value received: ` + numbers);
    }
  }

}

module.exports = StringCalculator;