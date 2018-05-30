const { StringCalculator } = rootRequire(`string-calculator`);

describe(`StringCalculator.prototype.add`, function() {
 
  it(
    `should return 0 if called with an empty string as 1st parameter`,
    async function() {
      expect(new StringCalculator().add(``)).toBe(0);
    }
  );

  it(
    `if called with a stringified integer as 1st parameter ` +
    `it should return the corresponding integer`,
    async function() {
      const calc = new StringCalculator();
      expect(calc.add(`1`)).toBe(1);
      expect(calc.add(`2`)).toBe(2);
      expect(calc.add(`3`)).toBe(3);
      expect(calc.add(`4`)).toBe(4);
      expect(calc.add(`5`)).toBe(5);
      expect(calc.add(`6`)).toBe(6);
    }
  );
});

