// https://stackoverflow.com/questions/48274028/the-left-hand-and-right-hand-side-of-an-arithmetic-operation-must-be-of-type-a
// <any>a - (b as any)
export const sortWords
  = (words: string): string => {
    return words.split(" ").sort((a, b) => <any>a.match(/\d/) - (b.match(/\d/) as any)).join(" ");
  };

export function order(words:String):String{
  return words.split(' ')
              .sort((a,b)=> +a.match(/\d/)! - +b.match(/\d/)!)
              .join(' ')
}