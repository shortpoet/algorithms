import {automorphic} from '../automorphic'
describe("automorphic", function () {
  it("test", function() {
    expect(automorphic(1)).toBe("Automorphic");
    expect(automorphic(6)).toBe("Automorphic");
    expect(automorphic(25)).toBe("Automorphic");
    expect(automorphic(76)).toBe("Automorphic");
    expect(automorphic(625)).toBe("Automorphic");
    expect(automorphic(3)).toBe("Not!!");
    expect(automorphic(9)).toBe("Not!!");
    expect(automorphic(53)).toBe("Not!!");
    expect(automorphic(95)).toBe("Not!!");
    expect(automorphic(225)).toBe("Not!!");
  });
});