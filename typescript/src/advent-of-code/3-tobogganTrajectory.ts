const fs = require('fs');

const callback = (err: Error, data: string) => {
  if (err) throw err;
  console.log(data);
}
const data: Array<string[]> = fs.readFileSync(
  "./3-test.txt",
  // "./3-input.txt",
  "utf-8",
  callback
)
  .split('\n')
  .map((l: string) => l.split(''));

console.log(data.length);
console.log(data[0].length);
// console.log(data.length*data[0].length);

const tobogganTrajectory =
  (topography: Array<string[]>): number => {
    let count = 0;
    let offset = 0;
    topography
      // .slice(1)
      .forEach((row, i) => {
        offset = offset > (row.length - 2)
          ? 2 - (row.length - offset) 
          : offset + 3
        const feature = row[offset];
        console.log(`[${i}, ${offset}]`);
        
        if (feature == '#') count++;
      })
    return count;
  };

console.log(tobogganTrajectory(data))