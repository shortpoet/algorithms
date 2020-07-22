using System.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
namespace dotnet.codewars
{
  public class FriendOrFoe
  {
    public static string[] Parse(string[] names)
    {
      var output = new[] { "" };

      return names.Where(name => name.Length == 4).ToArray();
    }
    public static IEnumerable<string> ParseYield(string[] names)
    {
      foreach (var item in names)
      {
        if (item.Length == 4)
        {
          yield return item;
        }
      }
    }
  }
  public class TestFriendOrFoe
  {
    [Fact]
    public void Test1()
    {
      string[] expected = { "Ryan", "Mark" };
      string[] names = { "Ryan", "Kieran", "Mark", "Jimmy" };
      Assert.Equal(expected, FriendOrFoe.ParseYield(names));
    }
  }
}