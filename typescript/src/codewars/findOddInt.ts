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
    console.log(mostFrequent);
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
    console.log(out);
    return parseInt(out);
  }
oddFrequency([1, 1, 2, 2, 5, 5, 8])

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

export const findOdd = (intArr: number[]): number => {
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