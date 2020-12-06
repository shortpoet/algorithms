import {customCustoms} from './6-customCustoms'
describe("customCustoms", function () {
  it("test", function() {
    expect(customCustoms(["abc","abc","abac","aaaa","b"])).toBe(11);
    // expect(customCustoms([["abc"],["a","b","c"],["ab","ac"],["a","a","a","a"],["b"]])).toBe(11);
  });
});



// regex transforms to get test input into array (almost)
// €$\b(\w +) € -> €"$0"€
// €(\n\n)+€ -> €]€
// €\n€ -> €€

// abc

// a
// b
// c

// ab
// ac

// a
// a
// a
// a

// b