export const sum
  = (a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);
export const nums = [...Array(4).keys()];
// console.log(sum(nums));

export const sumSpread
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);
// console.log(sumSpread(1, 2, 3));
