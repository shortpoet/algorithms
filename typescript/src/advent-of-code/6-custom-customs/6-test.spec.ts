import { customCustoms } from './6-customCustoms'
import { customCustoms2 } from './6-customCustoms'
import { customCustoms2b } from './6-customCustoms'
describe("customCustoms", function () {
  it("test", function () {
    expect(customCustoms(["abc", "abc", "abac", "aaaa", "b"])).toBe(11);
    const test2 = [
      [['a', 'b', 'c']],
      [['a'], ['b'], ['c']],
      [['a', 'b'], ['a', 'c']],
      [['a'], ['a'], ['a'], ['a']],
      [['b']]
    ];
    const test2b = [
      [
        [
          'h', 'r', 'p',
          'd', 't', 'c',
          'f', 'i', 'z'
        ],
        [
          'f', 'c', 'y',
          'k', 'x', 'o',
          's', 'm', 'v'
        ]
      ],
      [['e', 'i', 'a'], ['e', 'i', 'a', 'j'], ['a', 'e', 'i']],
      [
        ['o', 'a', 'i', 'y', 'w', 'c'],
        ['w', 'c', 'a', 'o'],
        ['o', 'w', 'c', 'a'],
        ['c', 'o', 'w', 'g', 'a']
      ]
    ];
    expect(customCustoms2(test2)).toBe(6);
    expect(customCustoms2b(test2b)).toBe(9);
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