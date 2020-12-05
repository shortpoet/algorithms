// binary space partitioning

export { };

const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, "./5-input.txt");

const boardingPasses: string[] = fs.readFileSync(
  file,
  "utf-8",
).split('\n');

export const binaryBoarding =
  (str: string): number => { 
    const height = 128;
    const width = 8;
    const rows = [...Array(height).keys()];
    const columns = [...Array(width).keys()];
    const seatRow = str.slice(0, 7).split('').reduce((row, direction) => { 
      row*=.5
      if (direction == 'F') rows.splice(row, row * 2);
      if (direction == 'B') rows.splice(0, row);
      return row;
    }, height);
    const seatColumn = str.slice(7).split('').reduce((column, direction) => { 
      column*=.5
      if (direction == 'L') columns.splice(column, column * 2);
      if (direction == 'R') columns.splice(0, column);
      return column;
    }, width);
    
    return rows[0] * 8 +columns[0];
  };

const ids = boardingPasses.map(b => binaryBoarding(b)).sort();
const highestId =
  (boardingPasses: string[]): number => { 
    return Math.max(...ids);
  };

const lowestId =
  (boardingPasses: string[]): number => { 
    return Math.min(...ids);
  };

const allSeats = [...Array(highestId(boardingPasses)).keys()].slice(lowestId(boardingPasses));
const missingSeats = allSeats.filter(seat => !ids.includes(seat));

console.log(binaryBoarding('FBFBBFFRLR'));
console.log(highestId(boardingPasses));
console.log(lowestId(boardingPasses));
console.log(missingSeats);

// 2020_day_05_solutions

// https://www.reddit.com/r/adventofcode/comments/k71h6r/2020_day_05_solutions/

// c# 

// https://www.reddit.com/r/adventofcode/comments/k71h6r/2020_day_05_solutions/geq0ott?utm_source=share&utm_medium=web2x&context=3