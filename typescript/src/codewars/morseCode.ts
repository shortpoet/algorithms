const morseDictionary: Record<string, string> = {"-.-.-.":";","-...-":"=","---":"O","----.":"9","-..-.":"/",".-...":"&","...--":"3",".--":"W","--":"M","--..":"Z",".----.":"'","-.-.--":"!","-...":"B","..-":"U",".----":"1","-.--.-":")",".-":"A","-....-":"-","...-":"V","...---...":"SOS","-.--":"Y","..":"I","--.-":"Q","-.":"N","..---":"2","-....":"6","---...":",",".-.-.":"+",".--.-.":"@","....-":"4","-----":"0",".-.-.-":".","-.-.":"C",".":"E","..-.":"F",".---":"J","-.-":"K",".-..":"L",".-.":"R","...":"S","--.":"G","---..":"8","..--..":"?","-.--.":"(",".--.":"P",".....":"5","..--.-":"_","-..":"D",".-..-.":"\"","-":"T","....":"H","--..--":",","...-..-":"$","--...":"7","-..-":"X"};
export const decode
  = (morseCode: string): string => {
    const words = morseCode.trim().split("   ");
    // console.log(words);
    const decodedWords = words.map(w => w.split(" ").map(c => morseDictionary[c]).join(""));
    const decoded = decodedWords.join(" ");
    // console.log(decoded);
    
    return morseCode.trim().split("   ").map(w => w.split(" ").map(c => morseDictionary[c]).join("")).join(" ");
  };
// console.log(decode('.... . -.--   .--- ..- -.. .'));

const [WORD_SEPARATOR, SIGN_SEPARATOR]=['   ', ' ']
export function decodeMorse(morseCode: string): string {
  return morseCode
    .trim()
    .split(WORD_SEPARATOR)
    .map(
      (word) => 
         word
          .split(SIGN_SEPARATOR)
          .map(sign => morseDictionary[sign])
          .join('')
    )
    .join(' ')
}

export function decodeMorse2(morseCode: string): string {
  const words = morseCode.split('   ');
  
  const res = words.reduce((acc: string, w: string) => 
    `${acc} ${w.split(' ').map((c) => morseDictionary[c]).join('')}`, '');
  
  return res.trim();
}