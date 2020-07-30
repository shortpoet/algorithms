
import { nextLargerSameDigits2, nextLargerSameDigitsYield } from "../nextLargerSameDigits";

describe("nextLargerSameDigits.ts", function() {
  test("nextLargerSameDigits", function () {
    // expect(nextLargerSameDigits2(12)).toBe(21);
    // expect(nextLargerSameDigits2(513)).toBe(531);
    // expect(nextLargerSameDigits2(531)).toBe(-1);
    // expect(nextLargerSameDigits2(2017)).toBe(2071);
    // expect(nextLargerSameDigits2(414)).toBe(441);
    // expect(nextLargerSameDigits2(144)).toBe(414);
  });
  test("larger numbers", function () {
    // expect(nextLargerSameDigits2(123456789)).toBe(123456798);
    // expect(nextLargerSameDigits2(1234567890)).toBe(1234567908);
    // expect(nextLargerSameDigits2(9876543210)).toBe(-1);
    // expect(nextLargerSameDigits2(9999999999)).toBe(-1);
    // expect(nextLargerSameDigits2(59884848459853)).toBe(59884848483559);
  });
});