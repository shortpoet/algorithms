import { whatsInAName } from '../collectionFind'

describe('collectionFind.ts', () => {
  test('whatsInAName', () => {
    const collection = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
    const source = { last: "Capulet" };
    const expected = [{ first: "Tybalt", last: "Capulet" }];
    expect(whatsInAName(collection, source)).toStrictEqual(expected)
    expect(whatsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
      .toStrictEqual([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }])
  })
})
