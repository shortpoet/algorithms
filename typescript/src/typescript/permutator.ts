// https://stackoverflow.com/questions/9960908/permutations-in-javascript/20871714#20871714
// https://stackoverflow.com/questions/21744120/trying-to-understand-recursion-within-for-loops-in-javascript
// https://cmsdk.com/javascript/permutations-in-javascript.html

export const permutator
  = (input: (string | number)[]): (string | number)[][] => {
    let result: (string | number)[][] = [];
    const permute = (arr: (string | number)[], memo: (string | number)[] = []) => {
      if (arr.length == 0) {
        result.push(memo);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), memo.concat(next));
        }
      }
    }
    permute(input);
    return result;
  };
// console.log(permutator([1,2,3]));

  //https://basarat.gitbook.io/typescript/future-javascript/generators
export function* permutatorYield(input: (string | number)[]) {
    function* permute (arr: (string | number)[], memo: (string | number)[] = []): Generator<(string | number)[]> {
      if (arr.length == 0) {
        yield memo;
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          yield* permute(curr.slice(), memo.concat(next));
        }
      }
    }
    yield* permute(input);
  };

// const permer = permutatorYield([1, 2, 3]);
// while (!permer.next().done) {
//   console.log(permer.next());
// }
// while (permer.next().value) {
//   console.log(permer.next());
// }
// function* generator() {
//   const bar = yield 'foo';
//   console.log(bar);
  
// }
// const iterator = generator();
// // Start execution till we get first yield value
// const foo = iterator.next();
// console.log(foo.value); // foo
// // Resume execution injecting bar
// const nextThing = iterator.next('bar');
// console.log(nextThing);
export function* permuteYield(permutation: (string|number)[]) { 
  var length = permutation.length, 
      c = Array(length).fill(0), 
      i = 1,
      k,
      p; 
  // console.log(`slice ${permutation.slice()}`);
  // console.log(`c ${c}`);
  
  yield permutation.slice(); 
  while (i < length) {
    // console.log("top");
    // console.log(`i ${i}`);
    // console.log(`c[i] ${c[i]}`);
    if (c[i] < i) { 
      // console.log("if");
      // console.log(`permutation ${permutation}`);
      // console.log(`i ${i}`);
      // console.log(`i % 2 = ${i % 2}`);
      // console.log(`c[i] = ${c[i]}`);
      // c[i] starts at 0
      // if c[i] = 1, i%2 is zero
      // k will always be zero 
      // n && 0 or 0 && n is always 0
      // otherwise n && m && x will always return x (last in sequence)
      k = i % 2 && c[i]; 
      // console.log(`k: ${k}`);
      p = permutation[i]; 
      // console.log(`p ${p}`);
      permutation[i] = permutation[k]; 
      // console.log(`permutation[i] ${permutation[i]}`);
      permutation[k] = p; 
      // console.log(`c ${c}`);
      ++c[i]; 
      // console.log(`c ${c}`);
      i = 1; 
      // console.log(`permutation ${permutation}`);
      // console.log(`slice ${permutation.slice()}`);
      yield permutation.slice(); 
    } else { 
      // console.log("else");
      // console.log(`c ${c}`);
      // console.log(`i ${i}`);
      c[i] = 0; 
      ++i; 
    } 
  } 
} 
// for (var permutation of permuteYield([1, 2, 3])) console.log(permutation); 