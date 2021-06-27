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
    test.each`
      bombs                                | bombsReadable    | stepRow | stepColumn | expectedBoard
      ${[[0, 0, 0], [0, 1, 0], [0, 0, 0]]} | ${'1;1'}         | ${1}    | ${1}       | ${'+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+'}
      ${[[1, 0, 0], [0, 0, 0], [0, 0, 0]]} | ${'0;0'}         | ${0}    | ${0}       | ${'+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'}
      ${[[0, 0, 0], [0, 0, 1], [0, 1, 0]]} | ${'1;2 and 2;1'} | ${1}    | ${2}       | ${'+-+-+-+\n| | | |\n+-+-+-+\n| | |X|\n+-+-+-+\n| | | |\n+-+-+-+'}
    `(
      'GIVEN bombs at $bombsReadable WHEN stepping on $stepRow;$stepColumn THEN the board should be \n$expectedBoard',
      ({ bombs, stepRow, stepColumn, expectedBoard }) => {
        // given
        const minesweeper = new Minesweeper(bombs);

        // when
        minesweeper.step(stepRow, stepColumn);

        // then
        expect(minesweeper.print()).toBe(expectedBoard);
      }
    );
  });

  describe('US3 - Marking squares', () => {
    test.each`
      bombs                                | bombsReadable | markRow | markColumn | expectedBoard
      ${[[0, 0, 0], [0, 1, 0], [0, 0, 0]]} | ${'1;1'}      | ${1}    | ${1}       | ${'+-+-+-+\n| | | |\n+-+-+-+\n| |*| |\n+-+-+-+\n| | | |\n+-+-+-+'}
    `(
      'GIVEN bombs at $bombsReadable WHEN stepping on $stepRow;$stepColumn THEN the board should be \n$expectedBoard',
      ({ bombs, markRow, markColumn, expectedBoard }) => {
        // given
        const minesweeper = new Minesweeper(bombs);

        // when
        minesweeper.mark(markRow, markColumn);
      }
    );
  });
});
