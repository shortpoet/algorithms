using Xunit;
namespace dotnet.codewars
{
  public class MiddleString
  {
    public static string Get(string input)
    {
      return
        input.Length % 2 != 0
          ? input.ToCharArray()[input.Length / 2].ToString()
          : input.ToCharArray()[(input.Length - 1) / 2].ToString() + input.ToCharArray()[(input.Length + 1) / 2].ToString();
    }
    public static string GetCompact(string s)
    {
      return s.Substring(s.Length / 2 - (1 - s.Length % 2), 2 - s.Length % 2);
      // return s.Length % 2 == 0 ? s.Substring(s.Length / 2 - 1, 2) : s.Substring(s.Length / 2, 1);
    }
  }
  public class TestMiddleString
  {
    [Fact]
    public void GenericTests()
    {
      Assert.Equal("es", MiddleString.Get("test"));
      Assert.Equal("t", MiddleString.Get("testing"));
      Assert.Equal("dd", MiddleString.Get("middle"));
      Assert.Equal("A", MiddleString.Get("A"));
    }
  }
}