// https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characters
export const spinalCase
  = (input: string): string => {
    return input.split(/\s|(?=[A-Z])|_/).join("-").toLowerCase();
  };

spinalCase("AllThe-small Things");