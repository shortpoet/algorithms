import {binaryBoarding} from './5-binaryBoarding'
describe("binaryBoarding", function () {
  it("test", function() {
    expect(binaryBoarding("FBFBBFFRLR")).toBe(357);
    expect(binaryBoarding("BFFFBBFRRR")).toBe(567);
    expect(binaryBoarding("FFFBBBFRRR")).toBe(119);
    expect(binaryBoarding("BBFFBBFRLL")).toBe(820);
  });
});
