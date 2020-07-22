using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace dotnet.codewars
{
  public class LikeCount
  {
    public static string GenerateMessage(string[] likers)
    {
      var uniqueLikers = new HashSet<string>(likers);
      Console.WriteLine("[{0}]", string.Join(", ", uniqueLikers));
      string message = "";
      var likerCount = likers.Count();
      if (likerCount > 3) {
        message = $"{likers[0]}, {likers[1]} and {likerCount - 2} others like this";
      } else if (likerCount > 2) {
        message = $"{likers[0]}, {likers[1]} and {likers[2]} like this";        
      } else if (likerCount > 1) {
        message = $"{likers[0]} and {likers[1]} like this";
      } else if (likerCount > 0) { 
        message = $"{likers[0]} likes this";
      } else {
        message = "no one likes this";
      }
      return message;
    }
  }
  public class TestLikeCount
  {
    [Fact]
    public static void Should_Generate_Message_With_Correct_Count()
    {
      Assert.Equal("no one likes this", LikeCount.GenerateMessage(new string[0]));
      Assert.Equal("Peter likes this", LikeCount.GenerateMessage(new string[] {"Peter"}));
      Assert.Equal("Jacob and Alex like this", LikeCount.GenerateMessage(new string[] {"Jacob", "Alex"}));
      Assert.Equal("Max, John and Mark like this", LikeCount.GenerateMessage(new string[] {"Max", "John", "Mark"}));
      Assert.Equal("Alex, Jacob and 2 others like this", LikeCount.GenerateMessage(new string[] {"Alex", "Jacob", "Mark", "Max"}));      
    }
  }
}