using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace dotnet.codewars
{
  public class DuplicateChar
  {
    public static int Count(string str)
    {
      var uniqueChars = new HashSet<char>();
      var dupeChars = new HashSet<char>();
      var chars = str.ToLower().ToCharArray();
      var duplicateCount = 0;
      foreach (var c in chars)
      {
        if (!uniqueChars.Contains(c))
        {
          uniqueChars.Add(c);
        } else if (!dupeChars.Contains(c)) {
          dupeChars.Add(c);
          duplicateCount += 1;
        } 
      }
      return duplicateCount;
    }
    public static int CountOneLiner(string str)
    {
      return str.ToLower().GroupBy(c => c).Where(g => g.Count() > 1).Count();
    }
    public static int CountOneLinerCount(string str)
    {
      return str.ToLower().GroupBy(c => c).Count(c => c.Count() > 1);
    }
    public static int DuplicateCount(string str)
    {
      var duplicates = new HashSet<char>();
      var occurences = new HashSet<char>();
      
      str = str.ToLower();
      
      foreach( char c in str )
      {
        if( occurences.Contains( c ) == false )
          occurences.Add( c );
        else if( duplicates.Contains( c ) == false )
          duplicates.Add( c );
      }

      return duplicates.Count;
    }
  }
  

  public class TestDuplicateChar
  {
    [Fact]
  public void Should_Return_Number_Of_Chars_With_Duplicates_Insensitve()
  {
    Dictionary<string, int> testCases = new Dictionary<string, int> {
      {"", 0},
      {"abcde", 0},
      {"aabbcde", 2},
      {"aabBcde", 2},
      {"Indivisibility", 1},
      {"Indivisibilities", 2}
    };
    foreach (var test in testCases)
    {
      Console.WriteLine("Testing {0}", test.Key);
      Assert.Equal(test.Value, DuplicateChar.Count(test.Key));
    }
  }
  }
}