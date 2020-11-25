export const automorphic =
  (n: number) => {
    const square = Math.pow(n, 2);
    // console.log(square);
    const inputLength = [...n.toString()].length;
    const squareLength = [...square.toString()].length;
    const tail = [...square.toString()].slice(squareLength - inputLength).join('');
    // console.log(tail);
    // console.log(n.toString());
    if (n.toString() == tail) {
      return `Automorphic`;
    } else {
      return `Not!!`;
    }
  }
automorphic(25)


export function automorphic2(n: number) {
  return String(n) === String(n ** 2).slice(-String(n).length)
      ? 'Automorphic'
      : 'Not!!';
}

export function automorphic3(n: number) {
  return `${Math.pow(n, 2)}`.endsWith(`${n}`) ?
    "Automorphic" : "Not!!";
}

export function automorphic4(n: number) {
  return `${Math.pow(n,2)}`.match(new RegExp(`${n}$`)) ? "Automorphic" : "Not!!";
}

export function automorphic5(n: number) {
  const square = n * n;
  const squareStr = square.toString();
  const nStr = n.toString();
  const ending = squareStr.substr(-nStr.length);
  if ( ending !== nStr) {
    return "Not!!";
  }
  
  return "Automorphic";
}