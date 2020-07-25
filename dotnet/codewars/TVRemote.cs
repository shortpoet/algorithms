using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace dotnet.codewars
{
  public class TVRemote
  {
    private static char[][] keyboard = new char[][] {
     new char[] {'a', 'b',  'c',  'd',  'e',  '1',  '2',  '3'},
     new char[] {'f',  'g',  'h',  'i',  'j',  '4',  '5',  '6'},
     new char[] {'k',  'l',  'm',  'n',  'o',  '7',  '8',  '9'},
     new char[] {'p',  'q',  'r',  's',  't',  '.',  '@',  '0'},
     new char[] {'u',  'v',  'w',  'x',  'y',  'z',  '_',  '/'}
    };
    public static int TouchesPerWord(string input)
    {
      string[,] _keyboard = new string[,]
      {
        { "a", "b", "c", "d", "e", "1", "2", "3" },
        { "f", "g", "h", "i", "j", "4", "5", "6" },
        { "k", "l", "m", "n", "o", "7", "8", "9" },
        { "p", "q", "r", "s", "t", ".", "@", "0" },
        { "u", "v", "w", "x", "y", "z", "_", "/" },
      };
      int w = _keyboard.GetLength(0); // width
      int h = _keyboard.GetLength(1); // height

      var steps = new List<int>();
      Tuple<int, int> previous = new Tuple<int, int>(0, 0);
      foreach (var character in input)
      {

        for (int x = 0; x < w; ++x)
        {
          for (int y = 0; y < h; ++y)
          {
            if (_keyboard[x, y] == character.ToString())
              // System.Console.WriteLine(keyboard[x, y]);
              // System.Console.WriteLine(character);
              if (previous == null)
              {
                // System.Console.WriteLine(x.ToString(), y.ToString());
                previous = Tuple.Create(x, y);
              }
              else
              {
                var current = Tuple.Create(x, y);
                steps.Add(Math.Abs(current.Item1 - previous.Item1) + Math.Abs(current.Item2 - previous.Item2));
                previous = current;
              }
          }
        }
      }
      Console.WriteLine(@"[{0}]", string.Join(", ", steps));
      return steps.Sum() + steps.Count(); // add count to account for presses on ok
    }
    public static int TvRemote(string input)
    {
      List<string> keyboard = new List<string>(){
            "abcde123", "fghij456", "klmno789", "pqrst.@0", "uvwxyz_/"
          };
      int posX = 0, posY = 0, sum = 0;

      foreach (char c in input)
      {
        for (int i = 0; i < keyboard.Count; i++)
        {
          if (keyboard[i].Contains(c))
          {
            int x = keyboard[i].IndexOf(c);

            sum += Math.Abs(posY - i) + Math.Abs(posX - x) + 1;

            posX = x;
            posY = i;
            break;
          }
        }
      }
      return sum;
    }
    public static int TvRemote2(string input)
    {
      var chars = "abcde123fghij456klmno789pqrst.@0uvwxyz_/";
      var total = 0;
      var previousIndex = 0;

      foreach (var c in input)
      {
        var currentIndex = chars.IndexOf(c);
        var columnNumber = Math.Abs(previousIndex % 8 - currentIndex % 8);
        var rowNumber = Math.Abs(previousIndex / 8 - currentIndex / 8);

        total += columnNumber + rowNumber + 1;
        previousIndex = currentIndex;
      }

      return total;
    }
    public static int TvRemote3(string input)
    {
      var result = 0;
      var xPosition = 0;
      var yPosition = 0;
      for (int i = 0; i < input.Length; i++)
      {
        var index = Array.IndexOf(keyboard, input[i]);
        var xIndex = index % 8;
        var yIndex = index / 8;
        result += Math.Abs(xPosition - xIndex) + Math.Abs(yPosition - yIndex) + 1;
        xPosition = xIndex;
        yPosition = yIndex;
      }
      return result;
    }
    private static IDictionary<char, int[]> keyCoordinates = keyboard.SelectMany((row, x) => row.Select((key, y) => new { Key = key, Coordinate = new[] { x, y } })).ToDictionary(kv => kv.Key, kv => kv.Coordinate);

    public static int TvRemote4(string word)
    {
      return word.Aggregate((Presses: 0, Coordinate: new[] { 0, 0 }),
        (route, key) =>
        {
          int[] keyCoordinate = keyCoordinates[key];
          return (route.Presses + (Math.Abs(keyCoordinate[0] - route.Coordinate[0]) + Math.Abs(keyCoordinate[1] - route.Coordinate[1]) + 1), keyCoordinate);
        })
        .Presses;
    }
    public static int TvRemote5(string word)
    {
      const string remoteControl = "abcde123fghij456klmno789pqrst.@0uvwxyz_/";

      var moves = 0;
      var position = 0;

      foreach (var ch in word)
      {
        var remoteCharIndex = remoteControl.IndexOf(ch);
        moves +=
            Math.Abs(position % 8 - remoteCharIndex % 8) +
            Math.Abs(position / 8 - remoteCharIndex / 8) + 1;
        position = remoteCharIndex;
      }

      return moves;
    }
  }

  public class TestTVRemote
  {
    [Fact]
    public void Example()
    {
      Assert.Equal(36, TVRemote.TouchesPerWord("codewars"));
    }

    [Fact]
    public void Misc()
    {
      Assert.Equal(16, TVRemote.TouchesPerWord("does"));
      Assert.Equal(23, TVRemote.TouchesPerWord("your"));
      Assert.Equal(33, TVRemote.TouchesPerWord("solution"));
      Assert.Equal(20, TVRemote.TouchesPerWord("work"));
      Assert.Equal(12, TVRemote.TouchesPerWord("for"));
      Assert.Equal(27, TVRemote.TouchesPerWord("these"));
      Assert.Equal(31, TVRemote.TouchesPerWord("words1"));
      Assert.Equal(47, TVRemote.TouchesPerWord("_1vfkiyn"));
    }
  }
}