const fs = require('fs');

const callback = (err: Error, data: string) => {
  if (err) throw err;
  console.log(data);
}
const data: Array<string[]> = fs.readFileSync(
  "./3-input.txt",
  // "./3-input.txt",
  "utf-8",
  callback
)
  .split('\n')
  .map((l: string) => l.split(''));

// console.log(data.length);
// console.log(data[0].length);
// console.log(data.length*data[0].length);

const tobogganTrajectory2 =
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
        console.log(`[${i}, ${offset}]`);

        if (feature == '#') count++;
      })

    return count;
  }
  
const tobogganTrajectory =
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
        console.log(`[${i}, ${offset}]`);

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

console.log(tobogganTrajectory(data))