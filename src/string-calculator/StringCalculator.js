class StringCalculator {

  add(numbers) {
    if (numbers.length <= 0)
      return 0;
    return parseInt(
      numbers.split(`,`).map(v => parseFloat(v)).reduce((a, b) => a + b, 0));
  }

}

module.exports = StringCalculator;