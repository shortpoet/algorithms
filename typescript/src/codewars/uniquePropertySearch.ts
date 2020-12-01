export const uniquePropertySearch =
  (arr: any[], keys: string[]): any[] => {
    const memo: { [key: string]: string } = {}
    return arr.reduce((output, origObj) => {
      const check = (currentVal: any) => {
        return output.some((outObj: any) => {
          return keys.every(k => (outObj[k] == currentVal[k]))
        })
      }
      return check(origObj)
        ? output
        : [...output, origObj];
    }, [])
    // return arr.reduce((output, origObj) => {
    //   // keep track of current iteration to avoid dupes
    //   let pushed = false;
    //   // initialize output 
    //   if (output.length == 0) {
    //     if (pushed == false) {
    //       output.push(origObj)
    //       pushed = true;
    //     };
    //   };
    //   keys.forEach(k => {
    //     if (!(k in origObj)) {
    //       // object has a key we don't care about
    //       if (pushed == false) {
    //         output.push(origObj);
    //         pushed = true;
    //       };
    //     } else {
    //       if (!(k in memo)) {
    //         // initialize memo
    //         memo[`${k}`] = origObj[k]
    //       }
    //       if (pushed == false && origObj[k] != memo[k]) {
    //         output.push(origObj);
    //         pushed = true;
    //       };

    //     };
    //   })
    //   return output;
    // }, [])
  }

  // https://www.codewars.com/kata/58cc0705bd22e324b3000028/solutions/typescript