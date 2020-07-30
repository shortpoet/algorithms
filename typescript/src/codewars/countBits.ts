export const countBits
  = (n: number): number => {
    const binaryArray = []
    let quotient = n;
    if (n == 0) return 0;
    while (quotient != 1) {
      binaryArray.push(quotient % 2);
      quotient = Math.floor(quotient / 2);
    }
    // final quotient of 1
    binaryArray.push(1);
    const binary = binaryArray.reverse().join("");
    return binaryArray.filter(b => b == 1).length;
  };
console.log(`count ${countBits(7)}`);

export function countBits1(n: number): number {
  return n.toString(2).replace(/0/g, '').length;
}
export function countBits2(n: number) {
  return n.toString(2).split('').filter(c => c === '1').length
}

export function countBitsRecursive(n: number): number {
  return (n == 0) ? 0 : (n % 2) + countBitsRecursive(Math.floor(n / 2));
}
export function countBits3(n: number) {
  let cnt = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      cnt++;
    }
    n = Math.floor(n / 2);
  }
  return cnt;
}