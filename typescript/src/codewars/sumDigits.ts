export const sumDigits
  = (input: number): number => {
    // return input.toString().split("").filter(c => c.match(/\d/)).reduce((acc, val) => parseInt(val) + acc, 0);
    return input.toString().split("").filter(c => c.match(/\d/)).reduce((acc, val) => +val + acc, 0);
  };
export const sumDigits2
  = (input: number): number => {
    return Math.abs(input).toString().split('').reduce((acc, digit) => parseInt(digit) + acc, 0)
  };
