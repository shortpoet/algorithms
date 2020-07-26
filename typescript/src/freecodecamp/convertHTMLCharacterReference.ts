const charMap: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&apos;',
  '"': '&quot;'
}
export const convertHTMLCharacterReference
  = (str: string): string => {
    // console.log(str.replace(/([&<>'"]+)/g, (...args: any[]) => {

    //   [...args].forEach(arg => console.log(arg))
    //   return charMap[[...args][0]]
    // }));
    // console.log(str.match(/([&<>'"])/g));
    
    // str.replace(/([>|&|<|'|"]+?)/g, (...args: any[]) => {

    //   [...args].forEach(arg => console.log(arg))
    //   return ""
    // });

    // need global flag to get more than one
    // string replace function
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
    // test case "<>" did not pass without lazy modifier to split into two matches, even with | pipe
    // but it does if + is removed
    // that wasn't needed as opposed to the global flag
    // also works without spreading args to replace
    // can just use first one
    return str.replace(/([&<>'"]+?)/g, (arg) => charMap[arg]);
    // return str.replace(/([&<>'"]+?)/g, (...args) => charMap[[...args][0]]);
    
  };
export const convertHTMLCharacterReference2
  = (str: string): string => {
    return str
      .split("")
      .map(char => charMap[char] || char)
      .join("")
  };
  
// convertHTMLCharacterReference("Dolce & Gabbana");
// convertHTMLCharacterReference('Stuff in "quotation marks"');
convertHTMLCharacterReference("<>");