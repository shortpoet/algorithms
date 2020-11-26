
export class Connect4 { 
  grid: (("1" | "2")|boolean)[][];
  hasWinner: boolean = false;
  currentPlayer: ("1" | "2") = "1";
  lastPlay: number[] = [];
  winner: ("1" | "2" | null) = null;
  player1VertStack:(0|1|2|3|4) = 0;
  player2VertStack:(0|1|2|3|4) = 0; 
  constructor() { 
    // const n = 8; // or some dynamic value
    this.grid = new Array(7)
      .fill(false)
      .map(() => new Array(6)
        .fill(false)
      );

    return this;
  }
  play(col: number): string { 
    console.log(`last play: ${this.lastPlay}`);
    const currentColumnNextVacant = this.grid[col].lastIndexOf(false);
    this.grid[col][currentColumnNextVacant] = this.currentPlayer;
    this.lastPlay = [col, currentColumnNextVacant];
    console.log(`last play: ${this.lastPlay}`);
    // console.log(this.grid);
    const verticalWin =
      (): void => { 
        if (this.player1VertStack == 4) {
          this.winner = "1";
        } 
        if (this.player2VertStack == 4) {
          this.winner = "2";
        } 
    }

    const checkWinCondition =
      (): void => { 
        this.grid.forEach((column, colNum) => { 
          column.forEach((cell, rowNum) => { 
            if (cell != false) { 
              console.log([colNum, rowNum]);
              
            }
            // if (cell != false) { 
            //   console.log([colNum, rowNum]);
              
            // }
          })
        })
      }
    const printOutput =
      (): string => { 
        return `Player ${this.currentPlayer} has a turn`
      }
    const changeTurn =
      (): void => { 
        if (this.currentPlayer == "1") {
          this.currentPlayer = "2";
        } else { 
          this.currentPlayer = "1";
        }
      }
    checkWinCondition();
    const output = printOutput();
    changeTurn();
    return output;
  }

}