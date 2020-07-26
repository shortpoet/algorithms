import { pigLatin, translatePigLatin, translatePigLatin2, translatePigLatin3 } from '../pigLatin'

const cases = [
  ["california", "aliforniacay"],
  ["paragraphs", "aragraphspay"],
  ["glove", "oveglay"],
  ["algorithm", "algorithmway"],
  ["schwartz", "artzschway"],
  ["rhythm", "rhythmay"],
  ["rhythm", "rhythmay"],
  ["Airway", "Airwayway"]
];
const doTest = (testCases: string[][]) => {
  testCases.forEach(tc => {
    test(`pigLatin ${tc[0]} becomes ${tc[1]}`, () => {
      expect(pigLatin(tc[0])).toBe(tc[1]);
      expect(translatePigLatin(tc[0])).toBe(tc[1]);
      expect(translatePigLatin2(tc[0])).toBe(tc[1]);
      expect(translatePigLatin3(tc[0])).toBe(tc[1]);
    });
  });
};
describe('pigLatin.ts', () => {
  doTest(cases);
})
