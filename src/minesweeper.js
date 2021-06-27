const CLOSED = ' ';
const BOMB = 'X';

const SQUARE_SEPARATOR = '|';

class Minesweeper {
  constructor(board) {
    this.board = board;
  }
  print() {
    if (!this.stepped) {
      return '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
    }

    return (
      '+-+-+-+\n' +
      this.board
        .map(
          (row) =>
            SQUARE_SEPARATOR +
            row
              .map((square) => (square === 1 ? BOMB : CLOSED))
              .join(SQUARE_SEPARATOR) +
            SQUARE_SEPARATOR
        )
        .join('\n+-+-+-+\n') +
      '\n+-+-+-+'
    );
  }

  step() {
    this.stepped = true;
  }
}

module.exports = Minesweeper;
