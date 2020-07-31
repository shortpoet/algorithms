import { permutator, permuteYield, permutatorYield } from '../typescript/permutator';

const getMax = (arr: number[]): number => {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    max = arr[len] > max ? arr[len] : max;
  }
  return max;
}
const getMin = (arr: number[]): number => {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    min = arr[len] < min ? arr[len] : min;
  }
  return min;
}
export const nextLargerSameDigits
  = (n: number): number => {
    //https://stackoverflow.com/questions/42623071/maximum-call-stack-size-exceeded-with-math-min-and-math-max
    const digits = [...n.toString()];
    const combos = permutator(digits);
    const nums = combos.map(x => +x.join(""));
    const candidates = nums.filter(x => x > n);
    // console.log(candidates);
    
    return candidates.length > 0
      ? getMin(candidates)
      : -1;
  };
export const nextLargerSameDigits2
  = (n: number): number => {
    
    let out = -1;
    const numStr = n.toString();
    for (let i = numStr.length - 2; i >= 0; i--) {
      const digits = [...numStr.substr(i)];
      // console.log(digits);
      

      const combos = [...permutatorYield(digits)];
      // console.log(combos);
      
      const nums = combos.map(x => +x.join(""));
      // console.log(nums);
      
      const candidates = nums.filter(x => x > n);
      // console.log(candidates);
      
      out = candidates.length > 0
        ? getMin(candidates)
        : -1
      if (out > n && out != -1) break;
    }
    // console.log(candidates);
    
    return out;
  };
export const nextLargerSameDigitsYield
  = (n: number): number => {
    
    const digits = [...n.toString()];
    const combos = [...permuteYield(digits)];
    const nums = combos.map(x => +x.join(""));
    const candidates = nums.filter(x => x > n);
    // console.log(candidates);
    
    return candidates.length > 0
      ? getMin(candidates)
      : -1;
  };

console.log(nextLargerSameDigits2(12))

export const _nextLargerSameDigits
  = (n: number): number => {
    // const toNumber = (s: string[])
    const digits = [...n.toString()]//.map(x => +x);

    let out = n;
    for (let i = digits.length - 1; i > -1; i--) {
      let swapped = [...digits]
      
      const swap = digits[i - 1]
      console.log(`swap ${swap}`);
      console.log(`unswapped ${swapped}`);
      swapped[i - 1] = digits[i]
      swapped[i] = swap
      console.log(`swapped ${swapped}`);
      if (out > +swapped.join("") && out > n) {
        console.log(`out 1st ${out}`);
        break;
      } else {
        out = +swapped.join("");
        console.log(`out 2nd ${out}`);
        if (out > n) {
          break;
        }
      }
    }

    return out;

    return digits.reduceRight((prev, cur, i, arr) => {
      const swap = arr[i - 1]
      console.log(`swap ${swap}`);
      let swapped = [...arr]
      console.log(`unswapped ${swapped}`);
      
      swapped[i - 1] = arr[i]
      swapped[i] = swap
      console.log(`swapped ${swapped}`);
      
      // const rest = arr[i - 1]
      //   ? arr.slice(0, i - 1)
      //   : []
      // console.log(`rest ${rest}`);
      // const comparator = +arr.slice(0, arr.length - 2).concat(cur).concat(rest).join("")
      // console.log(`comparator ${comparator}`);
      
      
      return prev > +swapped.join("")
        ? prev
        : +swapped.join("");
    }, n)
  };
