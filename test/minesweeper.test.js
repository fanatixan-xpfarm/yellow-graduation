const Minesweeper = require('../src/minesweeper');

describe('Minesweeper', () => {
  describe('US1 - Starting new game', () => {
    test('GIVEN a new game WHEN printing board THEN the result should be \n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+', () => {
      // given
      const minesweeper = new Minesweeper([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);

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
      minesweeper.step(1, 1);

      // then
      expect(minesweeper.print()).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    test('GIVEN a bomb at 0;0 WHEN stepping on 0;0 THEN the board should be \n+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+', () => {
      // given
      const minesweeper = new Minesweeper([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);

      // when
      minesweeper.step(0, 0);

      // then
      expect(minesweeper.print()).toBe(
        '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    test('GIVEN bombs at 1;2 and 2;1 WHEN stepping on 1;2 THEN the board should be \n+-+-+-+\n| | | |\n+-+-+-+\n| | |X|\n+-+-+-+\n| | | |\n+-+-+-+', () => {
      // given
      const minesweeper = new Minesweeper([
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 0],
      ]);

      // when
      minesweeper.step(1, 2);

      // then
      expect(minesweeper.print()).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| | |X|\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });
  });
});
