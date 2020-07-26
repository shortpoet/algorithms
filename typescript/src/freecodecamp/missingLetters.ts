// https://stackoverflow.com/questions/36947847/how-to-generate-range-of-numbers-from-0-to-n-in-es2015-only
const range =
  (start: number, end: number) =>
    Array.from({ length: end - start }, (v, k) => k + start);
export const missingLetters
  = (input: string): string | undefined => {
    const firstLetter = input.charCodeAt(0);
    const lastLetter = input.charCodeAt(input.length - 1);
    const inputCharCodes = input.split("").map(x => x.charCodeAt(0));
    const alphabetSection = range(firstLetter, lastLetter + 1)
    const completedSection = alphabetSection.map(c => String.fromCharCode(c)).join();
    const missingLetters = alphabetSection.filter(c => !inputCharCodes.includes(c)).map(c => String.fromCharCode(c)).join();
    return input.length == 26
      ? undefined
      : missingLetters;
  };
missingLetters("abde");