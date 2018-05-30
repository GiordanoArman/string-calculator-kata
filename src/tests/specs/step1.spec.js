const { StringCalculator } = rootRequire(`string-calculator`);
const { IllegalArgumentException } = rootRequire(`errors`);

describe(`StringCalculator.prototype.add`, function() {
  it(
    `should throw IllegalArgumentException if called with non-string 1st parameter`,
    async function() {
      const calc = new StringCalculator();
      const nonStrings = [
        null, 10, -10, {}, [], undefined, Infinity, -Infinity
      ];

      let errors = 0;

      nonStrings.forEach((value) => {
        try {
          calc.add(value);
        } catch (err) {
          if ((err instanceof IllegalArgumentException)) {
            errors++;
          } else {
            throw err;
          }
        }
      });

      expect(errors).toBe(nonStrings.length);
    }
  );
});