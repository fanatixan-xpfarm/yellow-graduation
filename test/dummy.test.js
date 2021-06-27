const dummy = require('../src/dummy');

describe('dummy', () => {
  describe('US1', () => {
    test('GIVEN nothing WHEN dummy operation THEN the result should be foobar', () => {
      expect(dummy()).toBe('foobar');
    });
  });
});
