
import { sumDigits } from "../sumDigits";

describe("sumDigits.ts", function() {
  test("sums absolute value of digits", function() {
    expect(sumDigits(10)).toBe(1);
    expect(sumDigits(99)).toBe(18);
    expect(sumDigits(-32)).toBe(5);
  });
});