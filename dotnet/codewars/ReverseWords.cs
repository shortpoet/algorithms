using System;
using System.Linq;
using System.Collections.Generic;
using Xunit;
namespace dotnet.codewars
{
  public class ReverseWords
  {
    public static string Parse(string str)
    {
      var reversed = str.Split(' ').Select(x => string.Join("", x.ToCharArray().ToArray().Reverse()));
      return string.Join(" ", reversed);
    }
    public static string ParseOneLiner(string str)
    {
      return string.Join(" ", str.Split(' ').Select(i => new string(i.Reverse().ToArray())));
    }
  }
  public class TestReverseWords
  {
    [Fact]
    public void Example()
    {
      Assert.Equal("sihT si na !elpmaxe", ReverseWords.Parse("This is an example!"));
    }
  }
}