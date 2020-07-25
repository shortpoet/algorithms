using System;
using System.Linq;
using Xunit;
namespace dotnet.codewars
{
  public class BuildTower
  {
    public static string[] Build(int nFloors)
    {
      var nums = Enumerable.Range(1, nFloors);
      var floors = Enumerable.Range(1, nFloors * 2).Where(n => n % 2 != 0).Select((n, i) => string.Concat(Enumerable.Repeat(" ", nFloors - i - 1)) + string.Concat(Enumerable.Repeat("*", n)) + string.Concat(Enumerable.Repeat(" ", nFloors - i - 1))).ToArray();

      System.Console.WriteLine(@"[{0}]", string.Join(", ", nums));
      System.Console.WriteLine(@"[{0}]", string.Join(", ", floors));
      // nums.Select((x, i) => new {})
      // foreach (var num in nums)
      // {

      // }
      return floors;
      // return Enumerable.Range(1, nFloors).Select((f, i) => new {});
    }
    public static string[] TowerBuilder(int nFloors)
    {
      return Enumerable.Range(1, nFloors).Select((x, i) => (new string(' ', nFloors - 1 - i)) + (new string('*', 2 * i + 1)) + (new string(' ', nFloors - 1 - i))).ToArray();
    }
  }
  [Collection("Build Tower")]
  public class TestBuildTower
  {
    [Fact]
    public void BasicTests()
    {
      Assert.Equal(string.Join(",", new[] { "*" }), string.Join(",", BuildTower.Build(1)));
      Assert.Equal(string.Join(",", new[] { " * ", "***" }), string.Join(",", BuildTower.Build(2)));
      Assert.Equal(string.Join(",", new[] { "  *  ", " *** ", "*****" }), string.Join(",", BuildTower.Build(3)));
    }
  }
}