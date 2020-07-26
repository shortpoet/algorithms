import { dNAPairing } from '../dNAPairing'

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}
// https://www.geekabyte.io/2019/06/typing-iterables-and-iterators-with.html
// https://dev.to/carlillo/understanding-iterator-pattern-in-javascript-typescript-using-symbol-iterator-a19

// for 'for (let x of y)' to work
const cases: Record<string, string[][]> = {
  "ATCGA": [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]],
  "TTGAG": [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]],
  "CTCTA": [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]  
};
const doTest =
  (testCases: Record<string, string[][]>) => {
  // (testCases: { [key:string]: string[][]}) => {
    Object.entries(testCases).forEach(v => {
      test(`input ${v[0]} becomes ${v[1]}`, () => {
        expect(dNAPairing(v[0])).toStrictEqual(v[1]);
      })
    })
  };
describe('dNAPairing.ts', () => {
  doTest(cases);
})
