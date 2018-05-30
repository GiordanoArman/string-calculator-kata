class StringCalculator {
  
  add(numbers) {
    if (numbers.length <= 0)
      return 0;
    if (numbers.length === 1) {
      return parseInt(numbers, 10);
    }
  }

}

module.exports = StringCalculator;