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
      console.log(v)
      return v[1]%2 != 0
    })[0][0]
    console.log(out);
    return parseInt(out);
  }
oddFrequency([1, 1, 2, 2, 5, 5, 8])