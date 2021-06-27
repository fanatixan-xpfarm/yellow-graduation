const Minesweeper = require('../src/minesweeper');

describe('Minesweeper', () => {
  describe('US1 - Starting new game', () => {
    test('GIVEN a new game WHEN printing board THEN the result should be \n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+', () => {
      // given
      const minesweeper = new Minesweeper();

      // when
      const board = minesweeper.print();

      // then
      expect(board).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });
  });

  describe('US2 - Stepping on bombs', () => {
    test('GIVEN a bomb at 1;1 WHEN stepping on 1;1 THEN the board should be \n+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+', () => {
      // given
      const minesweeper = new Minesweeper([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);

      // when
      minesweeper.step();
    });
  });
});
