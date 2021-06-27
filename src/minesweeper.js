const CLOSED = ' ';
const BOMB = 'X';
const MARK = '*';

const SQUARE_SEPARATOR = '|';
const ROW_SEPARATOR = '+-+-+-+';
const NEW_LINE = '\n';

class Minesweeper {
  constructor(bombs) {
    this.board = this.toBoard(bombs);
  }

  toBoard(bombs) {
    const result = [[], [], []];
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        result[row][column] = this.toBoardSquare(bombs, row, column);
      }
    }
    return result;
  }

  toBoardSquare(bombs, row, column) {
    const bombsSquare = bombs[row][column];

    let neighboringBombs = 0;
    const neighbors = [
      { rowOfset: -1, columnOfset: -1 },
      { rowOfset: -1, columnOfset: 0 },
      { rowOfset: -1, columnOfset: 1 },
      { rowOfset: 0, columnOfset: -1 },
      { rowOfset: 0, columnOfset: 1 },
      { rowOfset: 1, columnOfset: -1 },
      { rowOfset: 1, columnOfset: 0 },
      { rowOfset: 1, columnOfset: 1 },
    ];

    for (let neighbor of neighbors) {
      const r = row + neighbor.rowOfset;
      const c = column + neighbor.columnOfset;
      if (r >= 0 && r < 3 && c >= 0 && c < 3 && this.isBomb(bombs[r][c])) {
        neighboringBombs++;
      }
    }

    return {
      bomb: this.isBomb(bombsSquare),
      stepped: false,
      marked: false,
      neighboringBombs,
    };
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
    if (square.marked) {
      return MARK;
    }

    if (!square.stepped) {
      return CLOSED;
    }

    if (square.bomb) {
      return BOMB;
    }

    return square.neighboringBombs;
  }

  step(row, column) {
    this.board[row][column].stepped = true;
  }

  mark(row, column) {
    this.board[row][column].marked = true;
  }
}

module.exports = Minesweeper;
