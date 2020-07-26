export const sortedUnion
  = (arr: number[][]): number[] => {
    const flattenedArray = arr.reduce((acc, val) => acc.concat(val), []);
    const deDuped = flattenedArray.filter((v, i, a) => a.indexOf(v) == i);
    const deDupedSet = [... new Set(flattenedArray)]
    // console.log(deDuped);
    
    return arr.reduce((acc, val) => acc.concat(val), []).filter((v, i, a) => a.indexOf(v) == i);
  };
  // sortedUnion([[1, 3, 2], [5, 2, 1, 4], [2, 1]])
  // sortedUnion([[1, 2, 3], [5, 2, 1]])
  // sortedUnion([[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]])
  
  export const sortedUnionArgs
    = (...args: any[]): any[] => {
    // trying to use filter(v,i,a) method here adds complication because of any type on args
    const out = [... new Set([...args].reduce((acc, val) => acc.concat(val), [] as any[]))];
    // const outJS = [... new Set([...arguments].reduce((acc, val) => acc.concat(val), []))];
    return out;
    };
sortedUnionArgs([1, 3, 2], [5, 2, 1, 4], [2, 1])
