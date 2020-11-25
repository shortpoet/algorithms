// https://gist.github.com/axelpale/3118596
// https://www.tutorialspoint.com/all-combinations-of-sums-for-array-in-javascript
// https://codereview.stackexchange.com/questions/75658/pairwise-combinations-of-an-array-in-javascript
// https://codereview.stackexchange.com/questions/52119/calculate-all-possible-combinations-of-an-array-of-arrays-or-strings
// https://codereview.stackexchange.com/questions/194967/get-all-combinations-of-selecting-k-elements-from-an-n-sized-array
// https://stackoverflow.com/questions/37679987/efficient-computation-of-n-choose-k-in-node-js
// https://stackoverflow.com/questions/29868573/choosing-k-out-of-n
// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
// https://codereview.stackexchange.com/questions/200700/n-choose-k-combination-in-javascript

export const bestSum = (t: number, k: number, ls: number[]): number | null => {
  const ascending: number[] = [...ls].sort();
  const sum = (arr: number[]) => arr.reduce((acc, val) => +val + acc, 0);
  const combine = (set: number[], k: number): Array<number[]> => { 
    let combos
    const result: number[] = [];
    // const combos: Array<number[]> = new Array((set.length * (set.length - 1)) / 2);
    if (set.length < k || k <= 0) return [];
    if (k == set.length) return [set];
    if (k == 1) { 
      combos = [];
      for (let i = 0; i < set.length; i++) {
        const element = set[i];
        combos.push([element]);
      }
      return combos;
    }
    combos = [];
    for (let i = 0; i < set.length; i++) {
      const head = set.slice(i, i + 1);
      const tailCombos = combine(set.slice(i + 1), k - 1);
      for (let j = 0; j < tailCombos.length; j++) {
        const element = tailCombos[j];
        combos.push(head.concat(tailCombos[j]))
      }
    }
    return combos;
  }
  const combos = combine(ls, k);
  // console.log(combos);
  let result: null | number = null;
  const results = [];

  for (const combo of combos) {
    if (sum(combo) <= t) { 
      results.push(sum(combo));
    }
  }
  if (results.length > 0) result = Math.max(...results);
  return result;
}

// other solutions
// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/solutions/typescript