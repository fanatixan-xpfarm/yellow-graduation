const CLOSED = ' ';
const BOMB = 'X';

const SQUARE_SEPARATOR = '|';
const ROW_SEPARATOR = '+-+-+-+';
const NEW_LINE = '\n';

class Minesweeper {
  constructor(board) {
    this.board = board;
  }
  print() {
    if (!this.stepped) {
      return '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
    }

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
      row
        .map((square) => (square === 1 ? BOMB : CLOSED))
        .join(SQUARE_SEPARATOR) +
      SQUARE_SEPARATOR
    );
  }

  step() {
    this.stepped = true;
  }
}

module.exports = Minesweeper;
