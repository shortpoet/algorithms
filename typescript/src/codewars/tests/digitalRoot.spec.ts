
import { digitalRoot } from "../digitalRoot";

describe("digitalRoot.ts", function() {
  test("Take the sum of the digits of n. \
        If that value has more than one digit, \
        continue reducing in this way until a single - \
        digit number is produced.This is only applicable to the natural numbers."
    , function () {
    expect(digitalRoot(16)).toBe(7);
    expect(digitalRoot(456)).toBe(6);
    expect(digitalRoot(942)).toBe(6);
    expect(digitalRoot(132189)).toBe(6);
    expect(digitalRoot(493193)).toBe(2);
  });
});