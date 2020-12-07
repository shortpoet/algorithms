import { handyHaversacks } from './7-handyHaversacks';
const luggage = getFileContent('7-input.txt');

describe("handyHaversacks", function () {
  it("test", function() {
    expect(handyHaversacks(luggage)).toBe(357);
  });
});
