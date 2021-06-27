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

        // then
        expect(minesweeper.print()).toBe(expectedBoard);
      }
    );
  });

  describe('US4 - Stepping on non-bombs', () => {
    test.each`
      bombs                                | bombsReadable          | stepRow | stepColumn | expectedBoard
      ${[[0, 0, 0], [1, 1, 0], [0, 1, 0]]} | ${'1;0, 1;1, and 2;1'} | ${2}    | ${0}       | ${'+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+'}
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

    test('GIVEN marked bombs at 1;0, 1;1, and 2;1 WHEN stepping on 2;0 THEN the board should be \n+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+', () => {
      // given
      const bombs = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ];
      const minesweeper = new Minesweeper(bombs);
      minesweeper.mark(1, 0);
      minesweeper.mark(1, 1);
      minesweeper.mark(2, 1);

      // when
      minesweeper.step(2, 0);

      // then
      expect(minesweeper.print()).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+'
      );
    });

    test('GIVEN a bomb at 0;2 WHEN stepping on 0;0 THEN the board should contain an empty cell at 0;0', () => {
      // given
      const bombs = [
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const minesweeper = new Minesweeper(bombs);

      // when
      minesweeper.step(0, 0);

      // then
      expect(minesweeper.print()[9]).toBe('_');
    });
  });

  describe('US5 - Revealing neighbors of empty squares', () => {
    test('GIVEN a bomb at 0;2 WHEN stepping on 0;0 THEN its neighbors should be revealed', () => {
      // given
      const bombs = [
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const minesweeper = new Minesweeper(bombs);

      // when
      minesweeper.step(0, 0);

      // then
      expect(minesweeper.print()[11]).toBe('1');
      expect(minesweeper.print()[25]).toBe('_');
      expect(minesweeper.print()[27]).toBe('1');
    });

    test.each`
      bombs                                | bombsReadable | stepRow | stepColumn | expectedBoard
      ${[[0, 0, 1], [0, 0, 0], [0, 0, 0]]} | ${'0;2'}      | ${0}    | ${0}       | ${'+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+'}
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
});
