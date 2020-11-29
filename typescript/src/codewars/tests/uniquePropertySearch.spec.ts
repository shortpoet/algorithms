import {uniquePropertySearch} from '../uniquePropertySearch';

describe("duplicateEncoder", function () {
  it("test", function() {
    const objs = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 1, z: 1 },
      { x: 1, y: 1, z: 3 },
    ];
    const keys = [ 'x', 'y' ];
    
    const expected = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 1, z: 1 },
    ];
    expect(uniquePropertySearch(objs, keys)).toEqual(expected);
});
});