export { };

const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, "./6-input.txt");

const customsForms: string[] = fs.readFileSync(
  file,
  "utf-8",
)
  .split(/\n\n+/)
  .map((g: string) => g.replace(/\n/gm, ''));

// .map((group: string) => group.split(/\n/));

// export const customCustoms =
//   (groups: Array<string[]>): number => { 
//     return groups.reduce((final, group) => {
// const distinct: string[] = group.reduce((answers, person) =>
//   [...answers, person.split('').filter(letter => !answers.includes(letter))],
// [] as any[]);
// return final+=distinct.length;
//       // return [...final, distinct];
//     }, 0 as number);
//   };


export const customCustoms =
  (groups: string[]): number => {
    return groups.reduce((final, group) => {
      const distinct = group.split('').filter((letter, i, a) => a.indexOf(letter) == i);
      return final += distinct.length;
    }, 0 as number);
  };

const test = `abc

a
b
c

ab
ac

a
a
a
a

b`.split(/\n\n+/)
  .map(g => g.replace(/\n/gm, ''))
// .map((group: string) => group.split(/\n/))
console.log(
  test
);

console.log(customCustoms(customsForms))