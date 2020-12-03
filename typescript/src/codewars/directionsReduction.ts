export const directionsReduction =
  (arr: any[]): any[] => {
    const opposite: { [key: string]: string } = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      EAST: 'WEST',
      WEST: 'EAST',
    };
    const results: string[] = [];
    arr.forEach(direction => {
      if (results.length < 1) {
        results.push(direction);
      } else {
        if (results[results.length - 1] == opposite[direction]) {
          results.splice(results.length - 1);
        } else {
          results.push(direction);
        }
      }
    })
    return results;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

// https://www.codewars.com/kata/550f22f4d758534c1100025a/solutions/typescript
// https://stackoverflow.com/questions/57701306/using-reduce-instead-of-chaining-filter-and-map
// https://stackoverflow.com/questions/48853883/how-to-filter-and-reduce-javascript-array-object
// https://stackoverflow.com/questions/52466938/using-map-with-reduce-in-javascript-to-filter-objects-in-an-array
// https://stackoverflow.com/questions/34954347/using-reduce-to-build-a-filter-function-in-javascript

export function dirReduc5(arr: string[]): string[] {
  const opposites: any = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  let directions: string[] = [];

  arr.map((direction) => {
    directions[directions.length - 1] === opposites[direction]
      ? directions.splice(directions.length - 1, 1)
      : directions.push(direction);
  });

  return directions;
}

// 

export const dirReduc7 = (directionsArray: string[]): string[] => {
  for (let i = 0; i < directionsArray.length; i++) {
      const opositsValue = OPPOSITS[directionsArray[i]];
      if (opositsValue === directionsArray[i + 1]) {
          directionsArray.splice(i, 2)
          i = -1;
      }
  }
  return directionsArray;
}

const OPPOSITS = {
  "NORTH": "SOUTH",
  "WEST": "EAST",
  "EAST": "WEST",
  "SOUTH": "NORTH"
} as Record<string, string> //should be string enum, but this ts does not compile string enums

// 

export function dirReduc0(arr: string[]): string[] {
  var pat = /(NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST)/;
  var way = arr.join('');
  while (pat.test(way)) way = way.replace(pat, '');
  return way.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

//

export function dirReduc6(arr: string[]): string[] {
  let str = arr.join('');
  let oldStr = str;
  const pairs = /NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST/g;
  const sides = /(NORTH|SOUTH|EAST|WEST)/g;
  while (oldStr !== (str = str.replace(pairs, ''))) {
    oldStr = str;
  }
  const out = str.replace(sides, (x) => `${x},`).split(',');
  out.pop();
  return out;
}


//


export function dirReduc(arr: string[]): string[] {
  let str = arr.join(':');
  
  while (str.match(/NORTH:*SOUTH/) || str.match(/SOUTH:*NORTH/) || str.match(/EAST:*WEST/) || str.match(/WEST:*EAST/)) {
    str = str.replace(/NORTH:*SOUTH/g, '').replace(/SOUTH:*NORTH/g, '').replace(/EAST:*WEST/g, '').replace(/WEST:*EAST/g, '');
  }
  
  return str.split(':').filter(Boolean);
}


// 


// Type guards
export class UnknownDirectionError extends Error {
  constructor(str: string) {
    super(`${str} is not a valid direction`);
  }
}

export enum D {
  N = 'NORTH',
  S = 'SOUTH',
  W = 'WEST',
  E = 'EAST'
}

export const isDirection = (str: string): str is D => Object.values(D).includes(str as unknown as D);

export const d = (str: string): D => {
  if (isDirection(str)) {
    return str;
  }
  throw new UnknownDirectionError(str);
};

// Constants

export const O = { [D.N]: D.S, [D.S]: D.N, [D.W]: D.E, [D.E]: D.W };

// Utils

export const peek = <T>(arr: T[]): T | undefined => arr[arr.length - 1];

// Logic

export const reduce = (stack: D[]) => (dir: D) => {
  const last: D | undefined = peek(stack);
  if (last !== undefined && dir === O[last]) {
    stack.pop();
  } else {
    stack.push(dir);
  }
}


// 


export const dirReduc1 = (arr: string[]): string[] => {
  const a: D[] = [...arr].map(d);
  if (a.length <= 1) {
    return a;
  }
  const stack: D[] = [a.shift()!];
  a.forEach(reduce(stack));
  return stack;
};


// 


export function dirReduc2(arr: string[]): string[] {
  for(let i = 0; i < arr.length; i++){
    if((arr[i] === "NORTH" && arr[i + 1] === "SOUTH") || (arr[i] === "SOUTH" && arr[i + 1] === "NORTH")
    || (arr[i] === "WEST" && arr[i + 1] === "EAST") || (arr[i] === "EAST" && arr[i + 1] === "WEST")){
      arr.splice(i,2);
      i = (i - 1 < 0)? i - 1 : i - 2; 
    }
  }
  return arr;
}


// 


export const dirReduc3 = (res: string[]): string[] => {
  let isReady: boolean = false;
  while (!isReady) {
    isReady = true;
    for (let j = 0; j < res.length; j++) {
      if (
        (res[j] === 'NORTH' && res[j + 1] === 'SOUTH') ||
        (res[j] === 'SOUTH' && res[j + 1] === 'NORTH') ||
        (res[j] === 'EAST' && res[j + 1] === 'WEST') ||
        (res[j] === 'WEST' && res[j + 1] === 'EAST')
      ) {
        isReady = false;
        res[j] = '';
        res[j + 1] = '';
      }
    }
    res = res.filter(el => el);
  }

  return res;
};


// 


export function dirReduc4(arr: string[]): string[] {
  let arrChanged = true;
  while(arrChanged) {
    arrChanged = false;
    for(let i = 0; i < arr.length - 1; i++) {
      if((arr[i] === 'NORTH' && arr[i+1] === 'SOUTH') 
        || (arr[i] === 'SOUTH' && arr[i+1] === 'NORTH')
        || (arr[i] === 'EAST' && arr[i+1] === 'WEST')
        || (arr[i] === 'WEST' && arr[i+1] === 'EAST')
      ){
        arr[i] = '';
        arr[i+1] = '';
        arrChanged = true;
      }
    }
    arr = arr.filter(dir => dir);
  }
  return arr;
}