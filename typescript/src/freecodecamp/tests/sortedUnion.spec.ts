import { sortedUnion, sortedUnionArgs } from '../sortedUnion'
export interface ITestCase {
  case: number[][],
  expected: number[]
}
const cases: ITestCase[] = [
  {
    case: [[1, 3, 2], [5, 2, 1, 4], [2, 1]],
    expected: [1, 3, 2, 5, 4]
  },
  {
    case: [[1, 2, 3], [5, 2, 1]],
    expected: [1, 2, 3, 5]
  },
  {
    case: [[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]],
    expected: [1, 2, 3, 5, 4, 6, 7, 8]
  },
]
const doTest = (testCases: ITestCase[]) => {
  testCases.forEach(tc => {
    test(`sortedUnion ${tc.case} becomes ${tc.expected}`, () => {
      expect(sortedUnion(tc.case)).toStrictEqual(tc.expected);
      expect(sortedUnionArgs(tc.case.reduce((acc, val) => acc.concat(val), []))).toStrictEqual(tc.expected);
    });
  });
};
describe('sortedUnion.ts', () => {
  doTest(cases);
})
