export const mostFrequent
  = (source: number[]): number => {
    // console.log(new Map(source.map((num, i) => [num, i])));
    const numberMap: Record<number, number> = {}
    source.forEach((num) => {
      if (num % 2 == 0) {
        return;
      }
      if (num.toString() in numberMap) {
        numberMap[num] += 1;
      } else {
        numberMap[num] = 1;
      }
    });
    const mostFrequent = Object.entries(numberMap).sort((cur, prev) => {
      return prev[1] - cur[1]
    })[0][0]
    return parseInt(mostFrequent);
  }

mostFrequent([1, 3, 4, 5, 5, 7, 8, 9])



export const oddFrequency
  = (source: number[]): number => {
    // console.log(new Map(source.map((num, i) => [num, i])));
    const numberMap: Record<number, number> = {}
    source.forEach((num) => {
      if (num.toString() in numberMap) {
        numberMap[num] += 1;
      } else {
        numberMap[num] = 1;
      }
    });
    const out = Object.entries(numberMap).filter((v) => {
      return v[1]%2 != 0
    })[0][0]
    return parseInt(out);
  }
oddFrequency([1, 1, 2, 2, 5, 5, 8])

export const findOddFrequency = (xs: number[]): number | undefined => {
  const times: any = {};

  xs.forEach(num => times[num] = (times[num] || 0) + 1);
  
  for (let [key, value] of Object.entries(times)) {
    if (Number(value) % 2 === 1) {
      return Number(key);
    }
  }
  return 0;
};

export const findOddArrayGetSet = (xs: number[]): number => {
  return Array.from(
    xs.reduce((acc, v, i, arr) => {
      const val = acc.get(v);
      if (!val) {
        acc.set(v, 1);
      } else if (val) {
        acc.set(v, val + 1);
      }

      return acc;
    }, new Map<number, number>())
  ).find(([, key], i) => key % 2 !== 0)![0];
};

export const findOddForEach = (intArr: number[]): number => {
  //obj to hold each key of the intArr and the number of the key occurrence in the array
  const occurrence = {} as {[key:string]:number}

  intArr.forEach((int:number) => {
    //if the key is not set on the occurrence object,.... set to 1
    if(!occurrence[`${int}`]) { 
      occurrence[`${int}`] = 1 
    } else { // else increment it value by 1
       occurrence[`${int}`]++;
    }
  });
  //loop through keys of the occurrnence obj and return the key with an odd value
  const result =  Object.keys(occurrence).find((int:string) => occurrence[int] % 2 > 0);
  return Number(result)
};

export const findOddMap = (xs: number[]): number | null => {
  // happy coding!
   
  // count member occurence in array - as Map with members as keys
  var counts = xs.reduce((acc,current)=>
                         // entry for value exists in map?
                         acc.get(current)
                         // add to existing entry
                         ?acc.set(current,acc.get(current)!+1)
                         // start new entry
                         :acc.set(current,1),
                         // initial acc value 
                         new Map<number,number>());
  
  // output variable
  var odd:number | null = null;
  
  // check map for single odd value  
  for (let [key, value] of counts) {
    if(value%2===1){
      // assign output when condition met
      odd = key;
      // break as single odd value found
      break;
    }
  }
 
  // return null if no odd occurences
  return odd;
 
};

export const findOddDeDupe = (xs: number[]): number => {
  // happy coding!
  const numbers = xs.filter((v, i, a) => a.indexOf(v) === i); 
  console.log('numbers', numbers);
  for (const number of numbers) {
    let isOdd = xs.filter(v => v === number).length % 2;  
    if (isOdd === 1) { return number; }
  }
  
  return 0;
};

export const findOddForLet = (xs: number[]): number => {
  xs.sort();
  let countNumbers: { [key: string]: number } = {};
  
  for (const num of xs) {
    countNumbers[num] = countNumbers[num] ? countNumbers[num] + 1 : 1;
  }
  
  for (let key of Object.keys(countNumbers)) {
    if (countNumbers[key]%2 === 1) {
      return Number(key);
    }
  }
  
  return 0;
};

// https://hackernoon.com/xor-the-magical-bit-wise-operator-24d3012ed821
export const findOddOneLinerBitWise = (xs: number[]): number => xs.reduce((a, b) => a ^ b);

export const findOddOneLiner = (xs: number[]): number => {
  // happy coding!
  return xs.find(a => xs.filter(b => b === a).length % 2 === 1) || 0;
};

export const findOddFilter = (xs: number[]): number => {
  // happy coding!
  for(let x of xs) {
    if (xs.filter(_x => x == _x).length % 2  == 1) return x
  }
  return 0;
};

export const findOddFilter2 = (xs: number[]): number => {
  for (const value of xs) {
    if (xs.filter(v => v === value).length % 2 !== 0) {
      return value;
    }
  }
  
  return 0;
};