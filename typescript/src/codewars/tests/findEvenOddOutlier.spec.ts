
import { findEvenOddOutlier } from "../findEvenOddOutlier";

describe("findEvenOddOutlier.ts", function() {
  test("return outlier", function () {
    expect(findEvenOddOutlier([0, 1, 2])).toBe(1);
    expect(findEvenOddOutlier([1, 2, 3])).toBe(2);
    expect(findEvenOddOutlier([2, 6, 8, 10, 3])).toBe(3);
    expect(findEvenOddOutlier([0, 0, 3, 0, 0])).toBe(3);
    expect(findEvenOddOutlier([1, 1, 0, 1, 1])).toBe(0);
  });
});