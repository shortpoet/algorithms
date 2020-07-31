import { sum } from '../typescript/sum'

export const findEvenIndex
  = (arr: number[]): number => {
    return arr.reduce((prev, cur, i, a) => {
      return sum(a.slice(0, i)) == sum(a.slice(i + 1))
        ? i
        : prev
    }, -1);
  };