export const slotMachine =
  (reels: string[][], spins: number[]): number => {
    const items = [
      "Jack",
      "Queen",
      "King",
      "Bar",
      "Cherry",
      "Seven",
      "Shell",
      "Bell",
      "Star",
      "Wild"
    ]
    const scoresDict: {
      [key: string]: number,
    } = {};
    items.forEach((item, i) => scoresDict[`${item}`] = i + 1);
    const turn = reels.reduce((trn, _, i) => trn.concat(reels[i][spins[i]]), []);
    const score: number = (turn[0] == turn[1] && turn[0] == turn[2])
      ? scoresDict[turn[0]] * 10
      : ((turn[0] == turn[1] && turn[2] == items[9]) || (turn[0] == turn[2] && turn[1] == items[9]))
        ? scoresDict[turn[0]] * 2
        : (turn[1] == turn[2] && turn[0] == items[9])
          ? scoresDict[turn[1]] * 2
          : (turn[0] == turn[1] || turn[0] == turn[2])
            ? scoresDict[turn[0]]
            : (turn[1] == turn[2])
              ? scoresDict[turn[1]]
              : 0
    return score;
  }
// https://www.codewars.com/kata/590adadea658017d90000039/solutions/typescript

  export function fruit(reels: string[][], spins: number[]): number{
    const reel = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
    const items = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]];
    if (items[0] == items[1] && items[0] == items[2]){return (10 - reel.indexOf(items[0])) * 10;}
    let item = "";
    let extra = "";
    if (items[0] == items[1]){item = items[0]; extra = items[2];}
    if (items[0] == items[2]){item = items[0]; extra = items[1];}
    if (items[1] == items[2]){item = items[1]; extra = items[0];}
    if (item != ""){
      let num = 10 - reel.indexOf(item)
      if (extra == "Wild"){num = num * 2;}
        return num;
    }
    return 0;
  }

const imagesValues = new Map<string, number>([
  ["Wild", 10],
  ["Star", 9],
  ["Bell", 8],
  ["Shell", 7],
  ["Seven", 6],
  ["Cherry", 5],
  ["Bar", 4],
  ["King", 3],
  ["Queen", 2],
  ["Jack", 1],
]);

export function fruit0(reels: string[][], spins: number[]): number {
  const images = reels.map((images, index) => images[spins[index]]);
  const hits = images.reduce((acc, image) => {
    acc.set(image, acc.get(image) ? acc.get(image)! + 1 : 1);
    return acc;
  }, new Map<string, number>());

  const counts: Map<number, string> = new Map();
  hits.forEach((value, key) => counts.set(value, key));

  if (counts.has(3)) {
    return imagesValues.get(images[0])! * 10;
  }
  if (counts.has(2)) {
    return counts.get(1) === "Wild"
      ? imagesValues.get(counts.get(2)!)! * 2
      : imagesValues.get(counts.get(2)!)!;
  }
  return 0;
}

const scoring: {
  [key: string]: [number, number, number]
} = {
  Wild: [100, 10, 0],
  Star: [90, 9, 18],
  Bell: [80, 8, 16],
  Shell: [70, 7, 14],
  Seven: [60, 6, 12],
  Cherry: [50, 5, 10],
  Bar: [40, 4, 8],
  King: [30, 3, 6],
  Queen: [20, 2, 4],
  Jack: [10, 1, 2]
}

export function fruit2(reels: string[][], spins: number[]): number{
  const result: string[] = []
  spins.forEach((spin: number, index: number) =>  {
    result.push(reels[index][spin])
  })
  const dedupedResult = Array.from(new Set(result))
  if (dedupedResult.length === 3) {
    return 0
  }
  if (dedupedResult.length === 1) {
    return scoring[dedupedResult[0]][0]
  } else {
    const duped = result.indexOf(dedupedResult[0]) !== result.lastIndexOf(dedupedResult[0]) ? 0 : 1
    const oddOne = duped === 1 ? 0 : 1
    return dedupedResult[oddOne] === 'Wild' ? scoring[dedupedResult[duped]][2] : scoring[dedupedResult[duped]][1]
  }

}
// export function fruit3(reels: string[][], spins: number[]): number{
//   // Good luck
//   const win = new Map()
//               .set("Wild",10)
//               .set("Star",9)
//               .set("Bell",8)
//               .set("Shell",7)
//               .set("Seven",6)
//               .set("Cherry",5)
//               .set("Bar",4)
//               .set("King",3)
//               .set("Queen",2)
//               .set("Jack",1)
  
//   const resultArr = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]];
//   if(resultArr.join('') === resultArr[0].repeat(3)) {
//     return win.get(resultArr[0]) * 10;
//   }
//   const len = (word):number => {
//     let reg = new RegExp(word, 'g')
//        return (resultArr.join('').match(reg) || []).length
//   }
//   if ( len(resultArr[0]) === 2 || len(resultArr[1]) === 2) {
//     let word = len(resultArr[0])=== 2 ? resultArr[0] : resultArr[1];
//     const reg = new RegExp(word, 'g')
//      if (resultArr.join('').replace(reg, '') === 'Wild' && word !== 'Wild') {
//         return win.get(word) * 2
//       } else {
//         return win.get(word)
//       }
//   } else {
//     return 0;
//   }
  
// }
export function fruit4(reels: string[][], spins: number[]): number{
  const values = ["Jack","Queen","King","Bar","Cherry","Seven","Shell","Bell","Star","Wild"];
  let res = [];
  for(let i = 0; i< spins.length; i++){
    res.push(values.findIndex((x)=>x==reels[i][spins[i]]));
  }
  res.sort((a,b)=>  a-b);
  if(res[0] == res[2]) return (res[0]+1)*10;
  else if (res[0] == res[1] || res[2] == res[1]) return (res[1]+1) * (res[2] == values.length-1 && res[1]!=res[2] ? 2 : 1);
  else return 0;
}

const points = {
  'Wild': 10,
  'Star': 9,
  'Bell': 8,
  'Shell': 7,
  'Seven': 6,
  'Cherry': 5,
  'Bar': 4,
  'King': 3,
  'Queen': 2,
  'Jack': 1
};

// export function fruit3(reels: string[], spins: number[]): number{
//   const items = reels.map((reel, i) => reel[spins[i]]);
//   items.sort();
//   if (items[0] !== items[1]) {
//     items.reverse();
//   }
//   if (items[0] === items[2]) {
//     return points[items[0]] * 10;
//   }
//   if (items[0] === items[1]) {
//     const multiplier = (items[2] === 'Wild') ? 2 : 1;
//     return points[items[0]] * multiplier;
//   }
//   return 0;
// }