export const findEvenOddOutlier
  = (integers: number[]): number => { 
    const initialOdds = integers.slice(0, 3).filter(i => i % 2 != 0);
    const initialEvens = integers.slice(0, 3).filter(i => i % 2 == 0);
    // console.log(initialOdds);
    // console.log(initialEvens);
    
    const parity = integers.slice(0, 3).filter(i => i % 2 != 0).length > integers.slice(0, 3).filter(i => i % 2 == 0).length
      ? "odd"
      : "even";
    // console.log(parity);

    
    
    return parity == "odd"
      ? integers.filter(i => i % 2 == 0)[0]
      : integers.filter(i => i % 2 != 0)[0];
  };
findEvenOddOutlier([1, 2, 3]);

export function findOutlier(integers: number[]): number {
  if (integers.slice(0, 3).filter(i => i % 2 !== 0).length > 1) {
    return integers.find(v => v % 2 === 0) || 0;
  } else {
    return integers.find(v => v % 2 !== 0) || 0;
  }
}

export function findOutlier2(integers: number[]): number {
  const odds = integers.filter(v => v % 2);
  const evens = integers.filter(v => !(v % 2));

  return odds.length === 1 ? odds[0] : evens[0];
}
export function findOutlier3(integers: number[]): number {
  let oddList: number[] = [];
  let evenList: number[] = [];
  integers.forEach(num => num % 2 === 0 ? evenList.push(num) : oddList.push(num));
  return oddList.length === 1 ? oddList[0] : evenList[0];
}

export function iqTest(numbers: string): number {
  function findOutlier(integers: number[]): number {
    const odds = integers.filter(v => v % 2);
    const evens = integers.filter(v => !(v % 2));
  
    return odds.length === 1 ? odds[0] : evens[0];
  }
  const digits = numbers.split(" ").map(x => +x);
  
  return digits.indexOf(findOutlier(digits)) + 1;
}

export function iqTest2(numbers: string): number {
  const isEven = (n: number) => n % 2 === 0;
  const isEvenNumbers = numbers.split(" ").map(v => isEven(+v));
  const oddsCount = isEvenNumbers.filter(v => v === true).length;
  const evensCount = isEvenNumbers.filter(v => v === false).length;
  return isEvenNumbers.indexOf(oddsCount < evensCount) + 1;
}