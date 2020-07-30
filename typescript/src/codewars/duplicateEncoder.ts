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

export function duplicateEncode(word: string){
  // ...
  return word
  .toLowerCase()
  .split('')
  .map((a, i, w) => {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
  })
  .join('')
}
export function duplicateEncode1(word: string){
  word = word.toLowerCase()
  return [...word].map(char =>
    word.indexOf(char, word.indexOf(char) + 1) === -1 ? '(' : ')'
  ).join('')
}
export function duplicateEncode2(word: string){
  const dict: {[key:string]:string} = {};
  
  for (let ch of word) {
    if (dict[ch.toLowerCase()]) {
      dict[ch.toLowerCase()] = ')';
    } else {
      dict[ch.toLowerCase()] = '(';
    }
  }
  
  return word.split('').map(ch => dict[ch.toLowerCase()]).join('');
}

export function duplicateEncode3(word: string) {
  const chars = word.toLowerCase().split("");

  return chars.map(char => chars.filter(c => c === char).length > 1 ? ")" : "(").join("");
}

enum EncodingSymbols {
  UNIQUE = '(',
  DUPLICATE = ')',
}

export function duplicateEncode4(word: string): string {
  const hashTable: Record<string, number> = {};

  const charArray = word.toLowerCase().split('');
  for (const char of charArray) {
    if (hashTable[char] === undefined) {
      hashTable[char] = 0;
    }
    hashTable[char]++;
  }
  return charArray.map(char => {
    if (hashTable[char] === 1) {
      return EncodingSymbols.UNIQUE;
    } else {
      return EncodingSymbols.DUPLICATE;
    }
  }).join('')
}
export function duplicateEncode5(word: string){
  return word.toLowerCase().split('').map(
            m => (word.toLowerCase().split(m).length - 1)
             > 1 ? ')' : '(').join('');
}