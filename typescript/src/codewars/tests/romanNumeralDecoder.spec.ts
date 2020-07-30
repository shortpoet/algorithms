import { romanNumeralDecoder, romanNumeralDecoder2, romanNumeralDecoder3, romanNumeralDecoder4, romanNumeralDecoder5} from '../romanNumeralDecoder';


describe("romanNumeralDecoder.ts", function() {
  test("decode roman numeral no validation", function() {
    expect(romanNumeralDecoder5("XXI")).toBe(21);
    expect(romanNumeralDecoder5("I")).toBe(1);
    expect(romanNumeralDecoder5("IV")).toBe(4);
    expect(romanNumeralDecoder5("MMVIII")).toBe(2008);
    expect(romanNumeralDecoder5("MMIV")).toBe(2004);
    expect(romanNumeralDecoder5("MDCLXVI")).toBe(1666);
  });
});