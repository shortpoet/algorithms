import { directionsReduction } from '../directionsReduction'

const tester
  = (arr: string[], expected: string[]) =>
    it(
      `directionsReduction([${[...arr]}], ${expected})`,
      () => expect(directionsReduction(arr)).toStrictEqual(expected)
    );
describe("directionsReduction.ts", () => {
  tester(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"], ["WEST"]);
  tester(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"], []);
});