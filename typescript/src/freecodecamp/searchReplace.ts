export const searchReplace
  = (input: string, match: string, replacement: string): string => {
    const caser = (str: string) => match.charAt(0).match(/[A-Z]/)
      ? str.charAt(0).toUpperCase() + str.slice(1)
      : str.charAt(0).toLowerCase() + str.slice(1); 
    return input.replace(match, caser(replacement));
  };