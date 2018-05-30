const { StringCalculator } = rootRequire(`string-calculator`);

describe(`StringCalculator.prototype.add`, function() {
 
  it(
    `should allow specifying different delimeters`,
    async function() {
      const values = [
        [`//F\n0F12F23F444F333F2F4F5F6`, 829],
        [`//;\n0;12;444;333;2;4;5;6`, 806],
        [`//(\n0(12(444(333(2(4(5(6(12(12(3(2.2`, 835],
        [`//.\n10.10`, 20],
        [`//h\n10h20h30`, 60]
      ];

      const calc = new StringCalculator();

      const matches = values.map(([numbers, sum]) => {
        // console.log(`calc.add(numbers)`, calc.add(numbers));
        return calc.add(numbers) === sum;
      });

      expect(matches.indexOf(false)).toBe(-1);
    }
  );
  
});
