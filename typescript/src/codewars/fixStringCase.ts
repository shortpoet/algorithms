export const fixStringCase =
  (s: string): string => { 
    let upper = 0;
    let lower = 0;
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (!isNaN(+char)) return "there is a digit in there";
      if (char.toLowerCase() == char) {
        lower++;
      } else { 
        upper++;
      }
    }
    return lower >= upper
      ? s.toLowerCase()
        : s.toUpperCase();
  }

// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/solutions/typescript

  export function solve(s: string) {
    let uppercaseCount = s.split('').filter(letter => letter === letter.toUpperCase()).length;
    return uppercaseCount > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
  }
  export function solve2(s: string) {
    return s.replace(/[a-z]/g, '').length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
  }