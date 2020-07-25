using System.ComponentModel.DataAnnotations;
using Xunit;

namespace dotnet.codewars
{
  public class Prime
  {
    public static bool IsSchool(int n)
    {
      System.Console.WriteLine(n);
      bool isPrime = false;
      // Corner cases 
      if (n <= 1) return isPrime;
      for (int i = 2; i < n; i++)
      {
        if (n % i == 0)
        {
          break;
        }
        else
        {
          isPrime = true;
        }
      }
      System.Console.WriteLine(isPrime);
      return isPrime;
    }
  }


  [Collection("IsPrime")]
  public class PrimeTests
  {

    [Fact]
    public void Test1()
    {
      long[,] lst = new long[,] { { 1, 2 }, { 1, 3 }, { 1, 4 } };
      Assert.True(Prime.Is(123412341));
      Assert.True(Prime.Is(3164419));
      Assert.True(Prime.Is(17));
      Assert.True(Prime.Is(9493257));
      Assert.True(Prime.Is(41137447));
    }
  }
}
