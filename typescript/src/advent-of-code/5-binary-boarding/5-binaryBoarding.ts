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

// typescript 

// https://www.reddit.com/r/adventofcode/comments/k71h6r/2020_day_05_solutions/gepej10?utm_source=share&utm_medium=web2x&context=3
//https://github.com/Marterich/AoC2020/tree/main/Day_05

// const expression = /F|B|L|R/g;
// const binaryMap = { F: 0, B: 1, L: 0, R: 1 };
// const parseBoardingPass = (line: string): number => {
//     const binary = line.replace(expression, c => (binaryMap as any)[c]);
//     const row = parseInt(binary.substr(0, 7), 2);
//     const col = parseInt(binary.substr(7), 2);
//     return row * 8 + col;
// };

// const findSeat = (): [maxSeat: number, missingSeat: number] => {
//     const seats = mapLine('05', parseBoardingPass);
//     seats.sort(ascendingBy());
//     const lastSeat = seats.length - 1;
//     let missingSeat = -1;
//     for (let seat = 0; seat < lastSeat; seat++) {
//         if (seats[seat + 1] - seats[seat] === 2) {
//             missingSeat = seats[seat] + 1;
//             break;
//         }
//     }
//     return [seats[lastSeat], missingSeat];
// };

// javascript

// https://www.reddit.com/r/adventofcode/comments/k71h6r/2020_day_05_solutions/gepwqe4?utm_source=share&utm_medium=web2x&context=3

// export const convertStringToSeat = (str) => {
//   const regEx = /([FB]{7})([RL]{3})/;
//   const result = regEx.exec(str);
//   const rowNo = result[1].replace(/F/g,'0').replace(/B/g, '1');
//   const colNo = result[2].replace(/L/g,'0').replace(/R/g, '1');
//   return parseInt(rowNo,2) * 8 + parseInt(colNo, 2);
// }

// export const convertStringToSeat = (str) => {
//   const regEx = /([FB]{7})([RL]{3})/;
//   const result = regEx.exec(str);
//   const rowNo = result[1].replace(/F/g,'0').replace(/B/g, '1');
//   const colNo = result[2].replace(/L/g,'0').replace(/R/g, '1');
//   return parseInt(rowNo,2) * 8 + parseInt(colNo, 2);
// }

// export const convertStringToSeat = (str) => {
//   const regEx = /([FB]{7})([RL]{3})/;
//   const result = regEx.exec(str);
//   const rowNo = result[1].replace(/F/g,'0').replace(/B/g, '1');
//   const colNo = result[2].replace(/L/g,'0').replace(/R/g, '1');
//   return parseInt(rowNo,2) * 8 + parseInt(colNo, 2);
// }

// https://www.reddit.com/r/adventofcode/comments/k71h6r/2020_day_05_solutions/gepwane?utm_source=share&utm_medium=web2x&context=3

import fs from 'fs';

// fs.readFile('./data.txt', 'utf8', (err, data) => {
//     console.log('question 1: ', main(data.split('\r\n')));
//     console.log('question 2: ', main2(data.split('\r\n')));
// })

// const main = (data) => {
//     let ids = getIds(data);
//     return bubbleSort(ids).pop();
// }

// const main2 = (data) => {
//     let ids = getIds(data);
//     let sorted = bubbleSort(ids);
//     let jump = sorted.filter((item, index, sorted) => !(item + 1 === sorted[index+1])).shift();
//     return jump + 1

// }

// const getIds = (data) => {
//     let cords = data.map(string => {
//         return [recursion(string.split(''),['F','B'], [0, 127]), recursion(string.slice(-3).split(''),['L','R'], [0, 7])]
//     })
//     let ids = cords.map(rcs => {
//         let [row, col] = rcs;
//         return row * 8 + col;
//     })
//     return ids;
// }

// const recursion = (string, chars, bounds) => {
//     let [low, high] = bounds;
//     let [lower, upper] = chars;
//     let char = string.shift()
//     if(!(chars.includes(char))) return high
//     if(char === lower) {
//         high = Math.floor((low+high)/2);
//     } else if(char === upper){
//         low = Math.ceil((low+high)/2);
//     }
//     return recursion(string, chars, [low, high] )
// }

// function bubbleSort(arr){
//     var len = arr.length;
//     for (var i = len-1; i>=0; i--){
//       for(var j = 1; j<=i; j++){
//         if(arr[j-1]>arr[j]){
//             var temp = arr[j-1];
//             arr[j-1] = arr[j];
//             arr[j] = temp;
//          }
//       }
//     }
//     return arr;
//  }

// c# 

// https://www.reddit.com/r/adventofcode/comments/k71h6r/2020_day_05_solutions/geq0ott?utm_source=share&utm_medium=web2x&context=3