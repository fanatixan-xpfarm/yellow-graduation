const CLOSED = ' ';
const BOMB = 'X';

const SQUARE_SEPARATOR = '|';
const ROW_SEPARATOR = '+-+-+-+';
const NEW_LINE = '\n';

class Minesweeper {
  constructor(bombs) {
    this.board = bombs.map((row) =>
      row.map((square) => {
        return {
          bomb: this.isBomb(square),
          stepped: false,
        };
      })
    );
  }

  isBomb(square) {
    return square === 1;
  }
  print() {
    return (
      ROW_SEPARATOR +
      NEW_LINE +
      this.board
        .map((row) => this.printRow(row))
        .join(NEW_LINE + ROW_SEPARATOR + NEW_LINE) +
      NEW_LINE +
      ROW_SEPARATOR
    );
  }

  printRow(row) {
    return (
      SQUARE_SEPARATOR +
      row.map((square) => this.printSquare(square)).join(SQUARE_SEPARATOR) +
      SQUARE_SEPARATOR
    );
  }

  printSquare(square) {
    if (square.stepped && square.bomb) {
      return BOMB;
    }
    return CLOSED;
  }

  step(row, column) {
    this.board[row][column].stepped = true;
  }
}

module.exports = Minesweeper;
