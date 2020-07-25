using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace dotnet.codewars
{
  public class CommonDenominators
  {
    public static int[] GetPrimes(int limit)
    {
      var primes = new List<int>(new int[] {2});
      for (int i = 3; i <= limit; i+=2)
      {
        // if ()
      }
      return primes.ToArray();
    }
    public static string Calculate(long[,] fractions)
    {
      var denominators = new List<long>();
      int w = fractions.GetLength(0); // width
      int h = fractions.GetLength(1); // height
      System.Console.WriteLine($"{w}, {h}");
      for (int x = 0; x < w; ++x)
      {
        for (int y = 0; y < h; ++y)
        {
          if (y == 1)
          {
            denominators.Add(fractions[x, y]);
          }
        }
      }
      denominators.Sort();
      denominators.Reverse();
      System.Console.WriteLine(@"[{0}]", string.Join(", ", denominators));
      long lcd = -1;
      var hasLcd = false;
      foreach (var den in denominators)
      {
        
      }
      System.Console.WriteLine(lcd);
      return "";
    }
  }
  [Collection("CommonDenominators")]
  public class FractsTests
  {

    [Fact]
    public void Test1()
    {

      long[,] lst = new long[,] { { 1, 2 }, { 1, 3 }, { 1, 4 } };
      // Assert.Equal("(6,12)(4,12)(3,12)", CommonDenominators.Calculate(lst));

    }
  }
}