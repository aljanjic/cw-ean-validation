const validateEAN = require('./validateEAN');

describe('validateEAN', () => {
  it('should return hello', () => {
    expect(validateEAN(9783815820865)).toBe(true);
  });

});
