using Xunit;
namespace dotnet.codewars
{
  public class TriangleInequalityTheorem
  {
    public static bool IsTriangle(int a, int b, int c)
    {
      // must check if total area is greater than 0
      return ((a < b + c) && (b < a + c) && (c < a + b) && (a * b * c > 0));
    }
  }
  public class TestTriangleInequalityTheorem
  {
    [Fact]
    public void IsTriangle_ValidPostiveNumbers_ReturnsTrue()
    {
      Assert.True(TriangleInequalityTheorem.IsTriangle(5, 7, 10));
    }
  }
}