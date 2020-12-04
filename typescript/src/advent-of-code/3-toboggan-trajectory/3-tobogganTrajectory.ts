// https://stackoverflow.com/a/50913569/12658653
export { };

const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, "./3-input.txt");

const data: Array<string[]> = fs.readFileSync(
  // "H:\\source\\lrn\\algorithms\\typescript\\src\\advent-of-code\\3-toboggan-trajectory\\3-input.txt",
  file,
  "utf-8"
)
  .split('\n')
  .map((l: string) => l.split(''));

// console.log(data.length);
// console.log(data[0].length);
// console.log(data.length*data[0].length);

const tobogganTrajectory2 =
  (topography: Array<string[]>, offsetX: number, offsetY: number): number => {
    let count = 0;
    let x = 0;
    for (let y = 0; y < topography.length; y += offsetY, x += offsetX) {
      const row = topography[y];
        x = x >= row.length
        ? x - row.length
        : x
      const feature = row[x];
      // console.log(`[${y}, ${x}]`);
      if (feature == '#') count++;
    }
    return count;
  }

const multiTrajectory =
  (data: Array<string[]>, slopes: Array<[number, number]>): number => { 
    return slopes.reduce((product, slope) => product *= tobogganTrajectory2(data, slope[0], slope[1]), 1);
  };

const tobogganTrajectory1 =
  (topography: Array<string[]>): number => {
    let count = 0;
    let offset = 0;
    topography
      .forEach((row, i) => {
        offset = offset >= row.length
          ? offset - row.length
          : offset
        const feature = row[offset];
        offset += 3;
        // console.log(`[${i}, ${offset}]`);

        if (feature == '#') count++;
      })

    return count;

    // some other wrong answer
    //   for (let i = 1; i < topography.length; i++){
    //     console.log(`[${i}, ${offset}]`)
    //     var line = topography[i].toString().split("");
    //     if (offset >= line.length){
    //       offset = offset % line.length;
    //     }
    //     if(line[offset] == '#'){
    //       count++;
    //     }
    //     offset = offset + 3;
    // }

    // my old wrong answer
    // topography
    //   // .slice(1)
    //   .forEach((row, i) => {
    //     offset = offset > (row.length - 3)
    //       ? 3 - (row.length - offset) 
    //       : offset + 3
    //     const feature = row[offset];
    //     console.log(`[${i}, ${offset}]`);

    //     if (feature == '#') count++;
    //   })

  };

console.log(tobogganTrajectory1(data))
console.log(tobogganTrajectory2(data, 3, 1))
console.log(multiTrajectory(data, [[1,1], [3,1], [5,1], [7,1], [1,2]]));
