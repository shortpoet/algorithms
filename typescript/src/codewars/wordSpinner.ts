export const wordSpinner
  = (words: string) => {
    //TODO Have fun :)
    return words.split(" ").map(w => {
      return w.length >= 5
        ? w.split("").reverse().join("")
        : w;
      // if (w.length >= 5) {
      //   return w.split("").reverse().join("");
      // } else {
      //   return w
      // }
    }).join(" ");
  };