import { pigLatin } from '../pigLatin'

const cases = [
  ["california", "aliforniacay"],
  ["paragraphs", "aragraphspay"],
  ["glove", "oveglay"],
  ["algorithm", "algorithmway"],
  ["schwartz", "artzschway"],
  ["rhythm", "rhythmay"]
];
const doTest = (testCases: string[][]) => {
  testCases.forEach(tc => {
    test(`pigLatin ${tc[0]} becomes ${tc[1]}`, () => {
      expect(pigLatin(tc[0])).toBe(tc[1]);
    });
  });
};
describe('pigLatin.ts', () => {
  doTest(cases);
})
