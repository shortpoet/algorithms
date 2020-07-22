using System.Xml.Schema;
using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace dotnet.codewars
{
  public class PrinterError
  {
    public static string Detect(string input)
    {
      var valid = Enumerable.Range('a', 13).Select(x => (char) x).ToArray();
      var errors = input.Where(i => !Array.Exists(valid, a => a == i)).Count();
      System.Console.WriteLine(errors);
      return $"{errors}/{input.Length}";
    }
    public static string DetectOneLiner(string input)
    {
      return input.Where(c => c > 'm').Count() + "/" + input.Length;
    }
    private const string pattern = @"[^a-m]";
    public static string DetectRegex(String s) 
    {
        return $"{Regex.Matches(s, pattern).Count}/{s.Length}";
    }
  }
  public class TestPrinterError
  {
    [Fact]
    public static void test1()
    {
      Console.WriteLine("Testing PrinterError");
      string s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
      Assert.Equal("3/56", PrinterError.DetectRegex(s));
    }
  }
}