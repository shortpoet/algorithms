import { spinalCase } from '../spinalCase'

const cases = [
  ["This Is Spinal Tap", "this-is-spinal-tap"],
  ["thisIsSpinalTap", "this-is-spinal-tap"],
  ["The_Andy_Griffith_Show", "the-andy-griffith-show"],
  ["Teletubbies say Eh-oh", "teletubbies-say-eh-oh"],
  ["AllThe-small Things", "all-the-small-things"]
];
const doTest = (testCases: string[][]) => {
  testCases.forEach(tc => {
    test(`spinalCase ${tc[0]} becomes ${tc[1]}`, () => {
      expect(spinalCase(tc[0])).toBe(tc[1]);
    });
  });
};
describe('spinalCase.ts', () => {
  doTest(cases);
})
