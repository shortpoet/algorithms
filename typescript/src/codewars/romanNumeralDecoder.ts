const romanMap: Record<string, number> = {
  "I": 1,
  "IV": 4,
  "V": 5,
  "IX": 9,
  "X": 10,
  "LX": 40,
  "L": 50,
  "XC": 90,
  "C": 100,
  "CD": 400,
  "D": 500,
  "CM": 900,
  "M": 1000
}
const reverseMap: Record<number, string> = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "LX",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
}
export const romanNumeralDecoder
  = (roman: string): number => {
    let previous: number;
    return roman.split("").map(r => romanMap[r]).reduce((a, v) => {
      if (previous) {
        if (previous < v) {
          // let previousRoman = Object.keys(romanMap).find(k => romanMap[k] == previous);
          let out = a - previous + romanMap[reverseMap[previous] + reverseMap[v]];
          previous = v;
          return out;
        } else {
          previous = v;
          return a + v;
        }
      }
      previous = v;
      return a + v
    }, 0);
  };
  // this solution doesn't work with 2004
export const romanNumeralDecoder2
  = (roman: string): number => {
    let previous: number;
    return [...roman]
    .map(roman => romanMap[roman])
      .reduce((acc, cur) => cur > acc ? cur - acc : cur + acc)
  };
  // this does because reversed
export const romanNumeralDecoder3
  = (roman: string): number => {
    const table: Record<string, number> = {
      M : 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    }
    return roman.split('').reduceRight((prev, cur, i, arr) => {
      return table[arr[i+1]] > table[cur] ? prev - table[cur] : prev + table[cur];
    }, 0);
  };
  // also fails on 2004
export const romanNumeralDecoder4
  = (roman: string): number => {
    const symbols: any = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    return roman
      .split('')
      .map(e=>symbols[e])
      .reduce((p, c) => p < c ? c - p : c + p);
  };

export const romanNumeralDecoder5
  = (roman: string): number => {
    const symbols: any = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    }
    
    return roman.split('')
      .map((r: string, i: number, arr: string[]) => (
        r === 'I' && ['V', 'X'].includes(arr[i + 1])
          ? -1
          : symbols[r])
      )
      .reduce((a: number, b: number) => a + b);
  };

// console.log(romanNumeralDecoder3("IV"))