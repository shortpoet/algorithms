import {mostFrequent, oddFrequency} from '../findOddInt'

function testFrequent(a: number[], n: number) {
  it(`source = ${JSON.stringify(a)} ; n = ${n}`, () => {
    expect(mostFrequent(a)).toBe(n);
  });
}
function testOdd(a: number[], n: number) {
  it(`source = ${JSON.stringify(a)} ; n = ${n}`, () => {
    expect(oddFrequency(a)).toBe(n);
  });
}

describe('findOddInt.ts', () => {
  test('mostFrequent', async () => {
    expect(mostFrequent([1, 3, 4, 5, 5, 7, 8, 9])).toBe(5);
  })
  testFrequent([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  testFrequent([1,1,2,-2,5,2,4,4,-1,-2,5, -1, -1], -1);
  testFrequent([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  testFrequent([10, 1001], 1001);
  testFrequent([1,1,1,1,1,1,10,1,1,1,1], 1);
  testFrequent([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10, 3], 3);
  
})
describe('findOddInt.ts', () => {
  testOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  testOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  testOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  testOdd([10], 10);
  testOdd([1,1,1,1,1,1,10,1,1,1,1], 10);
  testOdd([5,4,3,2,1,5,4,3,2,10,10], 1);  
})