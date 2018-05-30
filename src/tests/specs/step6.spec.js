const { StringCalculator } = rootRequire(`string-calculator`);

describe(`StringCalculator.prototype.add`, function() {
  it(
    `should ignore numbers bigger than 1000 in the numers list`,
    async function() {
      expect(new StringCalculator().add(`1001,1`)).toBe(1);
    }
  );
});

