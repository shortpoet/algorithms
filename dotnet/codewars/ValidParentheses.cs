using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
namespace dotnet.codewars
{
  public class ValidParentheses
  {
    public static bool Determine(string input)
    {
      char openParen = Convert.ToChar("(");
      char closeParen = Convert.ToChar(")");
      var opened = new List<char>();
      var closed = new List<char>();
      var parens = input.Select(x => x.ToString());
      bool isValid = true;
      foreach (var character in input)
      {
        if (opened.Count() == 0 && character == closeParen)
        {
          return isValid = false;
        }
        else
        {
          if (character == openParen)
          {
            opened.Add(character);
          }
          else if (character == closeParen)
          {
            closed.Add(character);
          }
          if (closed.Count() > opened.Count())
          {
            return isValid = false;
          }
        }
      }
      if (opened.Count() != closed.Count())
      {
        return isValid = false;
      }
      return isValid;
    }
    public static bool ValidParentheses1(string input)
    {
      int parentheses = 0;
      foreach (char t in input)
      {
        if (t == '(')
        {
          parentheses++;
        }
        else if (t == ')')
        {
          parentheses--;

          if (parentheses < 0)
          {
            return false;
          }
        }
      }

      return parentheses == 0;
    }
    public static bool ValidParentheses2(string input)
    {
      var count = 0;
      foreach (var c in input)
      {
        if (count == -1)
          return false;
        if (c == '(')
          count++;
        if (c == ')')
          count--;
      }
      return count == 0;
    }
    public static bool ValidParentheses3(string input)
    {
      var open = new Stack<char>();

      foreach (var c in input)
      {
        switch (c)
        {
          case '(':
            open.Push(c);
            break;

          case ')':
            if (open.Count == 0)
              return false;
            open.Pop();
            break;
        }
      }

      return open.Count == 0;
    }
    public static bool ValidParentheses4(string input)
    {
      input = string.Concat(input.Where(x => x == '(' || x == ')'));
      while (input.Contains("()"))
      {
        input = input.Replace("()", "");
      }
      return string.IsNullOrEmpty(input);
    }
    public static bool ValidParentheses5(string input)
    {
      int c = 0;
      return !input.Select(i => c += i == '(' ? 1 : i == ')' ? -1 : 0).Any(i => i < 0) && c == 0;
    }
  }
  public class TestValidParentheses
  {
    [Fact]
    public void SampleTest1()
    {
      Assert.True(ValidParentheses.Determine("()"));
    }
    [Fact]
    public void SampleTest2()
    {
      Assert.True(ValidParentheses.Determine("[(c(b(a)))(d)]"));
    }

    [Fact]
    public void SampleTest3()
    {
      Assert.False(ValidParentheses.Determine(")(((("));
    }
    [Fact]
    public void SampleTest4()
    {
      Assert.False(ValidParentheses.Determine("[hi(hi)(]"));
    }
  }
}