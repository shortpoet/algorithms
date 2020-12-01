export const submit =
  (str: string): string => {
    return str
      .split(' ')
      .map(w => {
        const parts = w.split(/(\d+)/).filter(Boolean);
        const head = parts.slice(0, 1);
        const tail = parts.slice(1).length > 0
          ? parts.slice(1)[0].split('')
          : void 0;
        const decoded = String.fromCharCode(parseInt(head[0]));
        tail
          ? [tail[0], tail[tail.length - 1]] = [tail[tail.length - 1], tail[0]]
          : tail;
        return [decoded, (tail || []).join('').trim()].join('');
      })
      .join(' ');
  }
export const decipherThis =
  (str: string): string => {
    let words = str.split(' ')
      .map(w => {
        const parts = w.split(/(\d+)/).filter(Boolean)
        const head = parts.slice(0, 1);
        const tail = parts.slice(1).length > 0 ? parts.slice(1)[0].split('') : void 0;
        const decoded = String.fromCharCode(parseInt(head[0]));
        // if (tail) {
        //   let swap = tail[0];
        //   console.log(swap);
        //   console.log(tail[tail.length-1]);
          
        //   tail[0] = tail[tail.length-1];
        //   tail[tail.length-1] = swap;
        // }
        tail ? [tail[0], tail[tail.length-1]] = [tail[tail.length-1], tail[0]] : tail;
        return [decoded, (tail || []).join('').trim()].join('');
      })
    return words.join(' ');
  }

// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/solutions/typescript