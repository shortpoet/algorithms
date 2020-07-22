using System;
using System.Linq;
using Xunit;

namespace dotnet.codewars
{
  public class ExesAndOhs
  {
    public static bool XO(string input)
    {
      // return input.Where(c => char.ToUpper(c) == Convert.ToChar("X")).Count() ==  input.Where(c => char.ToUpper(c) == Convert.ToChar("O")).Count();
      return input.ToLower().Where(c => c == 'x').Count() ==  input.ToLower().Where(c => c == 'o').Count();
      // return input.ToLower().Count(i => i == 'x') == input.ToLower().Count(i => i == 'o')
    }
  }
  public class TestExesAndOhs
  {
    [Fact]
    public void ExampleTests()
    {
      Assert.True(ExesAndOhs.XO("xo"));
      Assert.True(ExesAndOhs.XO("xxOo"));
      Assert.False(ExesAndOhs.XO("xxxm"));
      Assert.False(ExesAndOhs.XO("Oo"));
      Assert.False(ExesAndOhs.XO("ooom"));
    }
  }
}