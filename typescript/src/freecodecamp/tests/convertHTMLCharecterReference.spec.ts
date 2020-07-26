import { convertHTMLCharacterReference, convertHTMLCharacterReference2 } from '../convertHTMLCharacterReference'

const cases = [
  ["Dolce & Gabbana", "Dolce &amp; Gabbana"],
  ["Hamburgers < Pizza < Tacos", "Hamburgers &lt; Pizza &lt; Tacos"],
  ["Sixty > twelve","Sixty &gt; twelve"],
  ['Stuff in "quotation marks"',"Stuff in &quot;quotation marks&quot;"],
  ["Schindler's List","Schindler&apos;s List"],
  ["<>","&lt;&gt;"],
  ["abc", "abc"],
];
const doTest = (testCases: string[][]) => {
  testCases.forEach(tc => {
    test(`convertHTMLCharacterReference ${tc[0]} becomes ${tc[1]}`, () => {
      expect(convertHTMLCharacterReference(tc[0])).toBe(tc[1]);
      expect(convertHTMLCharacterReference2(tc[0])).toBe(tc[1]);
    });
  });
};
describe('convertHTMLCharacterReference.ts', () => {
  doTest(cases);
})
