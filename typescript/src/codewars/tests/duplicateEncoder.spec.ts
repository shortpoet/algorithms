import {duplicateEncoder} from '../duplicateEncoder';

describe("duplicateEncoder", function () {
  it("test", function() {
    expect(duplicateEncoder("din")).toBe("(((");
    expect(duplicateEncoder("recede")).toBe("()()()");
    expect(duplicateEncoder("Success")).toBe(")())())");
    expect(duplicateEncoder("(( @")).toBe("))((");
  });
});