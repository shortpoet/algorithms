using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace dotnet.codewars
{
  public class FindOddInt
  {
    public static int FindIt(int[] seq)

    {
      var data = new Dictionary<int, List<int>>();
       
      foreach (var num in seq)
      {   
          if (!data.ContainsKey(num))
          {
            // Console.WriteLine(num);
            data[num] = new List<int>();
            data[num].Add(num);
          }
          else 
          {
            data[num].Add(num);
          }
      }
      foreach (var datum in data)
      {   
        Console.WriteLine("Key: {0}", datum.Key);
        Console.WriteLine("Values: {0}", string.Join(", ", datum.Value));
          if (datum.Value.Count%2 == 1)
          {
            Console.WriteLine("Solution Key: {0}", datum.Key);
            return datum.Key;
          }
      }

      return -1;
        
    }
  }

  public class TestFindOddInt
  {
    [Fact]
    public void Should_Find_Odd_Int()
    {
        Assert.Equal(5 , FindOddInt.FindIt ( new[] { 20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5 }));
        Assert.Equal(-1 , FindOddInt.FindIt ( new[] { 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 }));
    }
  }
}
