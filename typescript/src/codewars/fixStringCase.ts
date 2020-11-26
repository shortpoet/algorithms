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