
export const digitalRoot
  = (n: number): number => {
    let out = [...n.toString()].map(x => +x).reduce((a, c) => a + c, 0);
    while (out.toString().length > 1) {
      out = [...out.toString()].map(x => +x).reduce((a, c) => a + c, 0);
    }
    return out;
  };
console.log(digitalRoot(15))

export const digitalRoot2 = (n:number):number => {
  while (n >= 10) {
    n = n.toString()
      .split('')
      .map(x => parseInt(x))
      .reduce((a, b) => a + b, 0)
  }
  return n
};

export const digitalRoot3 = (n:number):number => {
  if(n < 10) return n

  return digitalRoot(
    n.toString()
      .split("")
      .map(i => parseInt(i))
      .reduce((a, b) => a + b, 0)
  )
};

export const digitalRoot4 = (n:number):number => {
  return n > 9
    ? digitalRoot([...(n.toString())].reduce((a, c) => a + Number(c), 0))
    : n;
};

export const digitalRootRecursive = (n:number):number => {
  let number = n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
  if(number.toString().length > 1) {
    return digitalRoot(number);
  }
  return number
};