using System.Numerics;
using System;
using System.Linq;
using System.Collections.Generic;
using Xunit;
using dotnet.utils;
namespace dotnet.codewars
{
  public class SumDigitPower
  {
    public static long[] Calculate(long a, long b)
    {
      var start = (int)a;
      var end = (int)b - start + 1;
      var nums = Enumerable.Range(start, end);
      var eurekas = new List<long>();
      foreach (var num in nums)
      {
        // need to convert char to string first
        var digits = num.ToString().ToCharArray().Select(x => Convert.ToInt64(x.ToString())).ToArray();
        var operands = new List<long>();
        for (int i = 0; i < digits.Count(); i++)
        {
          operands.Add((long)Math.Pow((double)digits[i], (double)i + 1));
        }
        // var total = operands.Sum(x => x);
        // System.Console.WriteLine(total);
        if (operands.Sum(x => x) == num)
        {
          Console.WriteLine(@"Eureka! {0} - [{1}]", num, string.Join(", ", operands));
          eurekas.Add(num);
        }

      }
      System.Console.WriteLine(@"[{0}]", string.Join(", ", eurekas));
      return eurekas.ToArray();
    }
    public static long[] CalculateCompact(long a, long b)
    {
      List<long> values = new List<long>();
      for (long x = a; x <= b; x++)
      {
        if (x.ToString().Select((c, i) => Math.Pow(Char.GetNumericValue(c), i + 1)).Sum() == x)
          values.Add(x);
      }
      return values.ToArray();
    }
  }

  // public class TestSumDigitPower
  // {
  //   [TestFixture]
  //   public static class SumDigPowerTests
  //   {

  //     private static string Array2String(long[] list)
  //     {
  //       return "[" + string.Join(", ", list) + "]";
  //     }
  //     private static void testing(long a, long b, long[] res)
  //     {
  //       Assert.Equal(Array2String(res),
  //                       Array2String(SumDigitPower.Calculate(a, b)));
  //     }
  //     [Fact]
  //     public static void test1()
  //     {
  //       Console.WriteLine("Basic Tests SumDigPow");
  //       testing(1, 10, new long[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 });
  //       testing(1, 100, new long[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 89 });
  //       testing(10, 100, new long[] { 89 });
  //       testing(90, 100, new long[] { });
  //       testing(90, 150, new long[] { 135 });
  //       testing(50, 150, new long[] { 89, 135 });
  //       testing(10, 150, new long[] { 89, 135 });

  //     }
  //   }
  // }
}