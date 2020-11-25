import {bestSum} from '../bestSum'
describe("bestSum", function () {
  it("test", function() {
    expect(bestSum(163, 3, [50, 55, 56, 57, 58])).toBe(163);
    expect(bestSum(163, 3, [50])).toBe(null);
    expect(bestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])).toBe(228);
  });
});
