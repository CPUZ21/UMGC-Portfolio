const timeWord = require('./jest.config.js');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

// describe("00:00", '#timeWord', {
//   it("should say Midnight", timeWord, {
//     expect('00:00').toBe("Midnight"));
//   });
// });