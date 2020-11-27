import {sortCsvColumns} from '../sortCsvColumns'
describe("bestSum", function () {
  it("test", function () {
    var preSorting = "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n"
      + "17945;10091;10088;3907;10132\n"
      + "2;12;13;48;11";
    var postSorting = "Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n"
      + "3907;17945;10091;10088;10132\n"
      + "48;2;12;13;11";
    expect(sortCsvColumns(preSorting)).toBe(postSorting);

    preSorting = "IronMan;Thor;Captain America;Hulk\n"
      + "arrogant;divine;honorably;angry\n"
      + "armor;hammer;shield;greenhorn\n"
      + "Tony;Thor;Steven;Bruce";
    postSorting = "Captain America;Hulk;IronMan;Thor\n"
      + "honorably;angry;arrogant;divine\n"
      + "shield;greenhorn;armor;hammer\n"
      + "Steven;Bruce;Tony;Thor";
    expect(sortCsvColumns(preSorting)).toBe(postSorting);
  });
});
