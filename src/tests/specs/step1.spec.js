const { StringCalculator } = rootRequire(`string-calculator`);
const { IllegalArgumentException } = rootRequire(`errors`);

describe(`StringCalculator.prototype.add`, function() {
 
  it(
    `should return 0 if called with an empty string as 1st parameter`,
    async function() {
      expect(new StringCalculator().add(``)).toBe(0);
    }
  );

  it(
    `should return the sum if called with an empty string as 1st parameter`,
    async function() {
      expect(new StringCalculator().add(``)).toBe(0);
    }
  );

  
});