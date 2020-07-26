import { searchReplace } from '../searchReplace'

const cases = [
  ["Let us go to the store", "store", "mall", "Let us go to the mall"],
  ["He is Sleeping on the couch", "Sleeping", "sitting", "He is Sitting on the couch"],
  ["This has a spellngi error", "spellngi", "spelling", "This has a spelling error"],
  ["His name is Tom", "Tom", "john", "His name is John"],
  ["Let us get back to more Coding", "Coding", "algorithms", "Let us get back to more Algorithms"],
];
const doTest = (testCases: string[][]) => {
  testCases.forEach(tc => {
    test(`searchReplace ${tc[0]} becomes ${tc[3]}`, () => {
      expect(searchReplace(tc[0], tc[1], tc[2])).toBe(tc[3]);
    });
  });
};
describe('searchReplace.ts', () => {
  doTest(cases);
})
