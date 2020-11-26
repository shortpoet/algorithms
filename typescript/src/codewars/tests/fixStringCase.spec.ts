import {fixStringCase} from '../fixStringCase'
describe("bestSum", function () {
  it("test", function() {
    expect(fixStringCase("code")).toBe(("code"))
    expect(fixStringCase("CODe")).toBe(("CODE"))
    expect(fixStringCase("COde")).toBe(("code"))
    expect(fixStringCase("Code")).toBe(("code"))
  });
});
