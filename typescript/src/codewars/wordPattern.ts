export const wordPattern =
  (word: string): string => { 
    const cipher = word
      .toLowerCase()
      .split('')
      .filter((v, i, a) => a.indexOf(v) == i)
    const out = word
      .toLowerCase()
      .split('')
      .map(x => cipher.indexOf(x))
      .join('.');
    console.log(out);
    return out;
  }