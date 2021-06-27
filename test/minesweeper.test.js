const Minesweeper = require('../src/minesweeper');

describe('Minesweeper', () => {
  describe('US1 - Starting new game', () => {
    test('GIVEN a new game WHEN printing board THEN the result should be \n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+', () => {
      // given
      const minesweeper = new Minesweeper();

      // when
      const board = minesweeper.print();
    });
  });
});
