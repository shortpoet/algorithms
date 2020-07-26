import { missingLetters } from '../missingLetters'

const cases = {
  "abce": "d",
  "abcdefghjklmno": "i",
  "stvwx": "u",
  "bcdf": "e",
  "abcdefghijklmnopqrstuvwxyz": undefined,
};
const doTest = (testCases: Record<string, string|undefined>) => {
  Object.entries(testCases).forEach(tc => {
    test(`missingLetters ${tc[0]} becomes ${tc[1]}`, () => {
      expect(missingLetters(tc[0])).toBe(tc[1]);
    });
  })
};
describe('missingLetters.ts', () => {
  doTest(cases);
})
