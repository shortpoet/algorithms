export const squareDigitsSequence =
  (a: number): number => { 
    const results = [a];
    const parser =
      (n: number): number => { 
        return n
          .toString()
          .split('')
          .reduce((a,b) => +a + Math.pow(+b, 2), 0)
      }
    
    while (!results.includes(parser(results.slice(-1)[0]))) { 
      results.push(parser(results.slice(-1)[0]));
    }
    console.log(results);
    
    return results.length + 1;
  }