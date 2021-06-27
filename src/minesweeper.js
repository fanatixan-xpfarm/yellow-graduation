const CLOSED = ' ';
const BOMB = 'X';

const SQUARE_SEPARATOR = '|';
const ROW_SEPARATOR = '+-+-+-+';

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
      '\n' +
      this.board
        .map(
          (row) =>
            SQUARE_SEPARATOR +
            row
              .map((square) => (square === 1 ? BOMB : CLOSED))
              .join(SQUARE_SEPARATOR) +
            SQUARE_SEPARATOR
        )
        .join('\n' + ROW_SEPARATOR + '\n') +
      '\n' +
      ROW_SEPARATOR
    );
  }

  step() {
    this.stepped = true;
  }
}

module.exports = Minesweeper;
