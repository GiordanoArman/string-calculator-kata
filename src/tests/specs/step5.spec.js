const { StringCalculator } = rootRequire(`string-calculator`);

describe(`StringCalculator.prototype.add`, function() {
 
  it(
    `should throw if called with negative numbers in the `,
    async function() {
      let error = null;
      try {
        new StringCalculator().add(`-1,-2`);
      } catch (err) {
        error = err;
      } finally {
        expect(error).toBeTruthy();
      }
    }
  );

});

