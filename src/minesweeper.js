const CLOSED = ' ';
const BOMB = 'X';
const MARK = '*';
const EMPTY = '_';

const SQUARE_SEPARATOR = '|';
const ROW_SEPARATOR = '+-+-+-+';
const NEW_LINE = '\n';

const BOARD_SIZE = 3;

const NEIGHBORS = [
  { rowOfset: -1, columnOfset: -1 },
  { rowOfset: -1, columnOfset: 0 },
  { rowOfset: -1, columnOfset: 1 },
  { rowOfset: 0, columnOfset: -1 },
  { rowOfset: 0, columnOfset: 1 },
  { rowOfset: 1, columnOfset: -1 },
  { rowOfset: 1, columnOfset: 0 },
  { rowOfset: 1, columnOfset: 1 },
];

class Minesweeper {
  constructor(bombs) {
    this.board = this.toBoard(bombs);
  }

  toBoard(bombs) {
    const result = [[], [], []];
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let column = 0; column < BOARD_SIZE; column++) {
        result[row][column] = this.toBoardSquare(bombs, row, column);
      }
    }
    return result;
  }

  toBoardSquare(bombs, row, column) {
    let neighboringBombs = 0;

    for (let neighbor of NEIGHBORS) {
      const r = row + neighbor.rowOfset;
      const c = column + neighbor.columnOfset;
      if (this.isBomb(bombs, r, c)) {
        neighboringBombs++;
      }
    }

    return {
      bomb: this.isBomb(bombs, row, column),
      opened: false,
      marked: false,
      neighboringBombs,
    };
  }

  isBomb(bombs, row, column) {
    return this.isValidCoordinate(row, column) && bombs[row][column] === 1;
  }

  isValidCoordinate(row, column) {
    return row >= 0 && row < BOARD_SIZE && column >= 0 && column < BOARD_SIZE;
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

    if (!square.opened) {
      return CLOSED;
    }

    return this.printOpenSquare(square);
  }

  printOpenSquare(square) {
    if (square.bomb) {
      return BOMB;
    }

    if (square.neighboringBombs === 0) {
      return EMPTY;
    }

    return square.neighboringBombs;
  }

  step(row, column) {
    const square = this.board[row][column];
    square.opened = true;
    if (this.shouldOpenNeighbors(square)) {
      this.openNeighbors(row, column);
    }
  }

  shouldOpenNeighbors(square) {
    return !square.bomb && square.neighboringBombs === 0;
  }

  openNeighbors(row, column) {
    for (let neighbor of NEIGHBORS) {
      const r = row + neighbor.rowOfset;
      const c = column + neighbor.columnOfset;
      if (this.shouldOpenNeighbor(r, c)) {
        this.step(r, c);
      }
    }
  }

  shouldOpenNeighbor(row, column) {
    return (
      this.isValidCoordinate(row, column) && !this.board[row][column].opened
    );
  }

  mark(row, column) {
    this.board[row][column].marked = true;
  }
}

module.exports = Minesweeper;
