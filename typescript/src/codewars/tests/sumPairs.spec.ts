import { sumPairs } from "../sumPairs"; 

const l1: number[] = [1, 4, 8, 7, 3, 15],
l2: number[] = [1, -2, 3, 0, -6, 1],
l3: number[] = [20, -13, 40],
l4: number[] = [1, 2, 3, 4, 1, 0],
l5: number[] = [10, 5, 2, 3, 7, 5],
l6: number[] = [4, -2, 3, 3, 4],
l7: number[] = [0, 2, 0],
l8: number[] = [5, 9, 13, -3];

describe("sumPairs.ts", function() {
  test("Basic: ["+l1+"] should return [1, 7] for sum = 8", function() {
    expect(sumPairs(l1, 8)).toEqual([1, 7]);
  });
  test("Negatives: ["+l2+"] should return [0, -6] for sum = -6", function() {
    expect(sumPairs(l2, -6)).toEqual([0, -6]);
  });
  test("No Match: ["+l3+"] should return undefined for sum = -7", function() {
    expect(sumPairs(l3, -7)).toEqual(undefined);
  });
  test("First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ", function() {
    expect(sumPairs(l4, 2)).toEqual([1, 1]);
  });
  test("First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ", function() {
    expect(sumPairs(l5, 10)).toEqual([3, 7]);
  });
  test("Duplicates: ["+l6+"] should return [4, 4] for sum = 8", function() {
    expect(sumPairs(l6, 8)).toEqual([4, 4]);
  });
  test("Zeroes: ["+l7+"] should return [0, 0] for sum = 0", function() {
    expect(sumPairs(l7, 0)).toEqual([0, 0]);
  });
  test("Subtraction: ["+l8+"] should return [13, -3] for sum = 10", function() {
    expect(sumPairs(l8, 10)).toEqual([13, -3]);
  });
});
