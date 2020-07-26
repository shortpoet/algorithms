
export const pigLatin
  = (input: string): string => {
    // #region notes
      // // california
      // // with negative lookahead
      // console.log(input.split(/(?![^a|e|i|o|u])/));
      // // with negative lookahead
      // // [ 'c', 'al', 'if', 'orn', 'i', 'a' ]
      // // with positive lookahead
      // console.log(input.split(/(?=[^a|e|i|o|u])/));
      // // with positive lookahead
      // // [ 'c', 'al', 'if', 'orn', 'i', 'a' ]
      
      // console.log(input.split(/([^a|e|i|o|u])/));
      // // [
      // //   '',  'c', 'a',  'l',
      // //   'i', 'f', 'o',  'r',
      // //   '',  'n', 'ia'
      // // ]
      // // https://stackoverflow.com/questions/24503827/split-string-into-array-without-deleting-delimiter
      // // no global flag
      // // only first match
      // console.log(input.match(/^\w|[^aeiou]/));
      // // [ 'c', index: 0, input: 'california', groups: undefined ]
      // // global flag
      // console.log(input.match(/^\w|[^aeiou]/g));
      // // [ 'c', 'l', 'f', 'r', 'n' ]
      // // non-null assertion operator
      // // https://stackoverflow.com/questions/45855600/object-is-possibly-null-for-regex
      // console.log(input.match(/^\w|[^aeiou]/)![0]);
      // // c
      // // string.match(/regex/![index])
      // // if you have capturing groups in your expression, 
      // // then.split will include the captured substring as a separate entry in the result array:
      // // https://stackoverflow.com/a/24512058/12658653
      // console.log(input.split(input.match(/^\w|[^aeiou]/)![0]));
      // console.log(input.split(input.match(/^\w|[^aeiou]/)![0]).filter(String));
      // // only includes first consonant
      // console.log(input.split(input.match(/^\w|([^aeiou]+)/)![0])[1] + input.match(/^\w|[^aeiou]+/)![0] + "ay");

      // ? initialVowelIndex != 0 || initialConsonantGroup == undefined
      //   ? input.slice(initialVowelIndex) + initialConsonantGroup + "ay"
      //   : input + "ay"
      // : initialConsonantGroup + "ay"
      // restOfWord without the indexing results in an empty string being transformed into a comma because default behavior 
      // is to use string.join(',')
      // https://stackoverflow.com/questions/9300941/why-is-the-result-of-adding-two-empty-arrays-in-javascript-a-string
      // const restOfWord = input.split(initialConsonantGroup).slice(1);
      // console.log(restOfWord);
      // const output = restOfWord + initialConsonantGroup + "ay"
      // console.log(output);
      // console.log(input.split(input.match(/^([^aeiou]+)/)![0])[1] + input.match(/^([^aeiou]+)/)![0] + "ay");
      // overglay
      // console.log(input.match(/^([^aeiou])+/));
      // [ 'gl', 'l', index: 0, input: 'glove', groups: undefined ]

      // console.log(input.match(/^([^aeiou])+/g));
      // [ 'gl' ]
    
    // #endregion notes
    const initialConsonantGroup = input.match(/^([^aeiou]+)/gi) ? input.match(/^([^aeiou]+)/gi): undefined;
    const initialVowelIndex = input.match(/([aeiou])/gi) ? input.indexOf(input.match(/([aeiou])/gi)![0]) : undefined;
    const output = initialVowelIndex == 0
      ? input + "way"
      : initialVowelIndex == undefined
        ? input + "ay"
        : input.slice(initialVowelIndex) + initialConsonantGroup + "ay";
    // if (initialVowelIndex == 0) {
    //   return input + "way";
    // } else if (initialVowelIndex == undefined) {
    //   return input + "ay";
    // } else {
    //   return input.slice(initialVowelIndex) + initialConsonantGroup + "ay";
    // }
    
    return output;


  };
  //https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-pig-latin/16039
export function translatePigLatin(str: string) {
    if (str.match(/^[aeiou]/i)) return str + "way";
  
    const consonantCluster = str.match(/^[^aeiou]+/i) ? str.match(/^[^aeiou]+/)![0] : null;
    return consonantCluster ? str.substring(consonantCluster.length) + consonantCluster + "ay" : "";
};

export function translatePigLatin2(str: string) {
    let consonantRegex = /^[^aeiou]+/i;
    let myConsonants = str.match(consonantRegex) ? str.match(consonantRegex)![0] : null;
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
};

export function translatePigLatin3(str: string) {
    return str
      .replace(/^[aeiou]\w*/i, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/i, "$2$1ay");
};
  
  // pigLatin("california");
  // pigLatin("glove");
  // pigLatin("paragraphs");
  // pigLatin("rhythm");
  // pigLatin("algorithm");