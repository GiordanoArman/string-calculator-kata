const { StringCalculator } = rootRequire(`string-calculator`);

describe(`StringCalculator.prototype.add`, function() {
 
  it(
    `should be able to sum the integers present in any comma and` +
    `line feed separated string list provided as 1st parameter`,
    async function() {
      const values = [
        [`0,12\n23,444,333\n2,4,5,6`, 829],
        [`0,12\n444,333\n2,4,5,6`, 760],
        [`0,12\n444,333,2,4,5,6,12\n12,3,2.2`, 789],
        [`10,10`, 20],
        [`10\n20\n30`, 60]
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

