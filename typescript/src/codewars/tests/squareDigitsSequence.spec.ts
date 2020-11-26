import {squareDigitsSequence} from '../squareDigitsSequence'
describe("bestSum", function () {
  it("test", function() {
    expect(squareDigitsSequence(16)).toBe(9);
    expect(squareDigitsSequence(103)).toBe(4);
    expect(squareDigitsSequence(1)).toBe(2);
  });
});
