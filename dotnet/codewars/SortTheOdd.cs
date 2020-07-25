using System.Linq;
using Xunit;
using System;
using System.Collections.Generic;

namespace dotnet.codewars
{
  public class SortTheOdd
  {
    public static int[] Execute(int[] input)
    {
      
      var odds = input.Where(x => x%2 != 0).OrderByDescending(x => x).Reverse().ToArray();
      var rest = input.Select((x, i) => Tuple.Create(x, i)).Where(x => !Array.Exists<int>(odds, o => x.Item1 == o));
      var oddList = odds.ToList();
      foreach (var tup in rest)
      {
        oddList.Insert(tup.Item2, tup.Item1);
      }
      var output = oddList.ToArray();
      System.Console.WriteLine(@"[{0}]", string.Join(", ", input));
      System.Console.WriteLine(@"[{0}]", string.Join(", ", odds));
      System.Console.WriteLine(@"[{0}]", string.Join(", ", rest));
      System.Console.WriteLine(@"[{0}]", string.Join(", ", output));
      return output;
      // int previousOdd = -1;
      // foreach (var num in input)
      // {
      //   if (num%2 == 0 || num == 0)
      //   {
      //     continue;
      //   } else {
      //     previousOdd = previousOdd == -1
      //       ? previousOdd = num
      //   }

      // }
    }
  }
  [Collection("Sort the Odd")]
  public class TestSorTheOdd
  {
    [Fact]
    public void BasicTests()
    {
      Assert.Equal(new int[] { 1, 3, 2, 8, 5, 4 }, SortTheOdd.Execute(new int[] { 5, 3, 2, 8, 1, 4 }));
      Assert.Equal(new int[] { 1, 3, 5, 8, 0 }, SortTheOdd.Execute(new int[] { 5, 3, 1, 8, 0 }));
      Assert.Equal(new int[] { }, SortTheOdd.Execute(new int[] { }));
    }
  }
}