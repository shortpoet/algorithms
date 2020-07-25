using System;
using System.Linq;
using Xunit;
using System.Text.RegularExpressions;
namespace dotnet.codewars
{
  public class PinLength
  {
    public static bool Validate(string pin)
    {
      // System.Console.WriteLine(Regex.Match(pin, @"^[\d]{4}$|^[\d]{6}$").Success);
      // return Regex.Match(pin, @"^[\d]{4}$|^[\d]{6}$").Success;
      System.Console.WriteLine(Regex.Match(pin, @"^[\d]*$").Success && (pin.Length == 4 || pin.Length == 6));
      return Regex.Match(pin, @"^[\d]*$").Success && (pin.Length == 4 || pin.Length == 6);
    }
    public static bool ValidatePin(string pin)
    {
      int val;
      return (pin.Length != 4 && pin.Length != 6) ? false : int.TryParse(pin, out val);
    }

    public static bool ValidatePin2(string pin) =>
      (pin.Length == 4 || pin.Length == 6) && pin.All(Char.IsDigit);

    public static bool ValidatePin3(string pin)
    {
      return Regex.IsMatch(pin, @"^(\d{6}|\d{4})\z");
    }
    public static bool ValidatePin4(string pin)
    {
      return pin.All(n => Char.IsDigit(n)) && (pin.Length == 4 || pin.Length == 6);
    }
  }

  [Collection("Pin Length")]
  public class SolutionTest
  {
    [Fact(DisplayName = "ValidatePin should return false for pins with length other than 4 or 6")]
    public void LengthTest()
    {
      Assert.False(PinLength.Validate("1"), "Wrong output for \"1\"");
      Assert.False(PinLength.Validate("12"), "Wrong output for \"12\"");
      Assert.False(PinLength.Validate("123"), "Wrong output for \"123\"");
      Assert.False(PinLength.Validate("12345"), "Wrong output for \"12345\"");
      Assert.False(PinLength.Validate("1234567"), "Wrong output for \"1234567\"");
      Assert.False(PinLength.Validate("-1234"), "Wrong output for \"-1234\"");
      Assert.False(PinLength.Validate("1.234"), "Wrong output for \"1.234\"");
      Assert.False(PinLength.Validate("-1.234"), "Wrong output for \"-1.234\"");
      Assert.False(PinLength.Validate("00000000"), "Wrong output for \"00000000\"");
    }

    [Fact(DisplayName = "ValidatePin should return false for pins which contain characters other than digits")]
    public void NonDigitTest()
    {
      Assert.False(PinLength.Validate("a234"), "Wrong output for \"a234\"");
      Assert.False(PinLength.Validate(".234"), "Wrong output for \".234\"");
      Assert.False(PinLength.Validate("123\\n"), "Wrong output for \"123\\n\"");
      Assert.False(PinLength.Validate("1234\\n"), "Wrong output for \"1234\\n\"");
    }

    [Fact(DisplayName = "ValidatePin should return true for valid pins")]
    public void ValidTest()
    {
      Assert.True(PinLength.Validate("1234"), "Wrong output for \"1234\"");
      Assert.True(PinLength.Validate("0000"), "Wrong output for \"0000\"");
      Assert.True(PinLength.Validate("1111"), "Wrong output for \"1111\"");
      Assert.True(PinLength.Validate("123456"), "Wrong output for \"123456\"");
      Assert.True(PinLength.Validate("098765"), "Wrong output for \"098765\"");
      Assert.True(PinLength.Validate("000000"), "Wrong output for \"000000\"");
      Assert.True(PinLength.Validate("090909"), "Wrong output for \"090909\"");
    }
  }
}