import { sum } from '../typescript/sum'

export const tribonacci
  = ([a, b, c]: [number, number, number], n: number): number[] => {
    let out = [a, b, c]
    for (let i = 3; i < n; i++) {
      out.push(sum(out.slice(i - 3, i + 1)));
    }
    return out.slice(0, n);
  };
tribonacci([1, 1, 1], 1);

export function tribonacci2(s: Array<number>, n: number): number[] {
  for (let i = 0; s.length < n; i++) s.push(s[i] + s[i + 1] + s[i + 2]);
  return s.slice(0,n);
}

export const tribonacci3
  = ([a, b, c]: [number, number, number], n: number): number[] =>
    n < 1
      ? []
      : [a].concat(tribonacci([b, c, a + b + c], n - 1));