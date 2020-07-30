export const duplicateEncoder
  = (word: string): string => {
    const chars = [...word.toLowerCase()];
    // const uniques = new Set();
    const counts: {[key:string]:number} = {};
    chars.forEach(c => {
      if (Object.keys(counts).includes(c)) {
        counts[c] += 1;
      } else {
        counts[c] = 1
      }
    })
    return chars.map(c => counts[c] > 1 ? ")" : "(").join("");
  };