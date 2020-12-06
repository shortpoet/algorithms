export { };

const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, "./6-input.txt");

const customsForms1: string[] = fs.readFileSync(
  file,
  "utf-8",
)
  .split(/\n\n+/)
  .map((g: string) => g.replace(/\n/gm, ''));

export const customCustoms =
  (groups: string[]): number => {
    return groups.reduce((final, group) => {
      const distinct = group.split('').filter((letter, i, a) => a.indexOf(letter) == i);
      return final += distinct.length;
    }, 0 as number);
  };

const customsForms2: string[][][] = fs.readFileSync(
  file,
  "utf-8",
)
  .split(/\n\n+/)
  .map((group: string) => group
    .split(/\n/)
    .map(person => person.split(''))
  )

export const customCustoms2 =
  (groups: string[][][]): number => {
    let count = 0;
    for (const group of groups) {
      const intersection = group.reduce((common, person, personIndex) => {
        if (personIndex == 0) {
          return [...common, ...person]
        } else {
          return common.filter(commonAnswer => person.includes(commonAnswer));
        };
      }, []);
      count += intersection.length
    };
    return count;
  };

export const customCustoms2b =
  (groups: string[][][]): number => {
    return groups
      .map(group => group
        .reduce((common, person) => common
          .filter(commonAnswer => person
            .includes(commonAnswer)
          )
        ), [])
      .reduce((total, current) => total += current.length, 0)
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

b`
  .split(/\n\n+/)
  .map((group: string) => group
    .split(/\n/)
    .map(person => person.split(''))
  )
  ;
// console.log(test);
console.log(customCustoms(customsForms1));
// console.log(customsForms2.slice(7, 10));
// console.log(customCustoms2(customsForms2.slice(7, 10)));
console.log(customCustoms2(customsForms2));
console.log(customCustoms2b(customsForms2));
