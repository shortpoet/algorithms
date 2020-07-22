using System;
using System.Linq;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using Xunit;
namespace dotnet.codewars
{
  public class StringToCharOrdinal
  {
    public static string Parse(string input)

    {
      // https://stackoverflow.com/questions/6183379/check-alphanumeric-characters-in-string-in-c-sharp
      // ^ - means start of the string
      // []* - could contain any number of characters between brackets
      // a-zA-Z - any alpha characters
      // $ - end of the string
      Regex alphaChars = new Regex(@"^[a-zA-Z]*$");
      // https://stackoverflow.com/questions/314466/generating-an-array-of-letters-in-the-alphabet
      char[] alphabet = Enumerable.Range('A', 26).Select(x => (char) x ).ToArray();
      Console.WriteLine(input);
      System.Console.WriteLine(alphabet);
      var ordinals = new List<int>();
      foreach (var character in input)
      {
        if (alphabet.Contains(char.ToUpper(character)))
        {
          ordinals.Add(Array.IndexOf(alphabet, char.ToUpper(character)) + 1);
        }
      }
      return string.Join(" ", ordinals);
    }
    public static string ParseOneLiner(string input)
    {
      return string.Join(" ", input.ToLower().Where(char.IsLetter).Select(x => x - 'a'+1));
    }
  }
  public class TestStringToCharOrdinal
  {
  [Fact]
    public void SampleTest()
    {
      Assert.Equal("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11", StringToCharOrdinal.ParseOneLiner("The sunset sets at twelve o' clock."));
      Assert.Equal("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20", StringToCharOrdinal.ParseOneLiner("The narwhal bacons at midnight."));
    }    
  }
}