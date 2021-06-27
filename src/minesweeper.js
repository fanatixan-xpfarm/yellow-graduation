const CLOSED = ' ';
const BOMB = 'X';

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
            '|' +
            row.map((square) => (square === 1 ? BOMB : CLOSED)).join('|') +
            '|'
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
