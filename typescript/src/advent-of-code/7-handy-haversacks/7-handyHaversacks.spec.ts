import { handyHaversacks, handyHaversacks2 } from './7-handyHaversacks';
import { getFileContent } from '../0-utils/index';

const luggage = getFileContent('../7-handy-haversacks/7-test.txt');
const luggage2 = getFileContent('../7-handy-haversacks/7-test2.txt');
const luggageRecursive = getFileContent('../7-handy-haversacks/7-test-recursive.txt');

describe("handyHaversacks", function () {
  it("test", function() {
    expect(handyHaversacks(luggage)).toBe(4);
    expect(handyHaversacks(luggageRecursive)).toBe(5);
    expect(handyHaversacks2(luggage)).toBe(32);
    expect(handyHaversacks2(luggage2)).toBe(126);
  });
});
