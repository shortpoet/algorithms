export const automorphic =
  (n: number) => {
    const square = Math.pow(n, 2);
    console.log(square);
    const inputLength = [...n.toString()].length;
    const squareLength = [...square.toString()].length;
    const tail = [...square.toString()].slice(squareLength - inputLength).join('');
    console.log(tail);
    console.log(n.toString());
    if (n.toString() == tail) {
      return `Automorphic`
    } else {
      return `Not!!`
    }
  }
automorphic(25)