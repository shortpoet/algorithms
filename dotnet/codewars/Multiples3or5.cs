using System.Linq;
using System;
using Xunit;
namespace dotnet.codewars
{
  public class Multiples3or5
  {
    public static int FindSum(int limit)
    {
      var nums = Enumerable.Range(0, limit).Where(x => x % 3 == 0 || x % 5 == 0);
      System.Console.WriteLine(@"[{0}]", string.Join(", ", nums));
      System.Console.WriteLine(nums.Sum());
      return Enumerable.Range(0, limit)
                       .Where(x => x % 3 == 0 || x % 5 == 0)
                       .Sum();
    }
    public static int Solution(int value) => Enumerable.Range(0, value).Sum(i => i % 3 == 0 || i % 5 == 0 ? i : 0);
  }
  public class TestMultiples3or5
  {
    [Fact]
    public void Test()
    {
      Assert.Equal(23, Multiples3or5.FindSum(10));
    }
  }
}