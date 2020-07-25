import {sum, sumSpread, nums} from '../sum'

describe('sum.ts', () => {
  test('sum', async () => {
    expect(sum(nums)).toBe(6);
  }) 
  test('sumSpread', async () => {
    expect(sumSpread(1, 2, 3)).toBe(6);
  }) 
})