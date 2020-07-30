import { wordSpinner } from '../wordSpinner'

describe("wordSpinner", function(){
  it("should pass a sample test", function() {
    expect(wordSpinner("Hey fellow warriors")).toBe("Hey wollef sroirraw");
  });
});