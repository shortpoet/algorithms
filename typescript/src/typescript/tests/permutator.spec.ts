import { permutator } from '../permutator';

describe('permutator.ts', () => {
  test('permutes array of string or number', () => {
    expect(permutator(['c', 'a', 't'])).toStrictEqual([
      ['c', 'a', 't'],
      [ 'c', 't', 'a' ],
      [ 'a', 'c', 't' ],
      [ 'a', 't', 'c' ],
      [ 't', 'c', 'a' ],
      ['t', 'a', 'c']
    ])
    expect(permutator([1, 2, 3])).toStrictEqual([
      [1, 2, 3],
      [ 1, 3, 2 ],
      [ 2, 1, 3 ],
      [ 2, 3, 1 ],
      [ 3, 1, 2 ],
      [3, 2, 1]
    ])
  })
})