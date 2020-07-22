using System;
namespace dotnet.utils
{
  public class Logger
  {
    public static void PrintArray<T>(T input)
    {
      Console.WriteLine(@"[{0}]", string.Join(", ", input));
    }
  }
}