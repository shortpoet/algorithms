export const sumPairs =
  (ints: number[], s: number): [number, number] | undefined => {
    const evens: number[] = [];
    const odds: number[] = [];
    const sumPolarity: ('even' | 'odd') = s % 2 == 0
      ? 'even'
      : 'odd'
    let results: [number, number] = [0, 0];
    let found = false;
    for (let i = 0; i < ints.length; i++) {
      const num = ints[i];
      const numPolarity: ('even' | 'odd') = num % 2 == 0
      ? 'even'
      : 'odd'
      if (numPolarity != sumPolarity) {
        const finding: (number | undefined) = odds.find(o => o + num == s);
        if (finding != undefined) {
          results[0] = finding;
          results[1] = num;
          found = true;
          break;
        }
      } else {
        const finding: (number | undefined) = evens.find(e => e + num == s);
        if (finding != undefined) {
          results[0] = finding;
          results[1] = num;
          found = true;
          break;
        }
      }
      if (numPolarity == 'even') {
        evens.push(num);
      } else {
        odds.push(num);
      }

    }
    return found
      ? results
      : undefined;
  };

// https://www.codewars.com/kata/54d81488b981293527000c8f/solutions/typescript

// 
export function sumPairs0(ints: number[], s: number): [number, number] | void {  
  const seen = new Set();
  for (const n of ints) {
    if (seen.has(s - n)) return [s - n, n];
    seen.add(n);
  }
}