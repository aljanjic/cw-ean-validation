const validateEAN = require('./validateEAN');

describe('validateEAN', () => {
  it('9783815820865 should return true', () => {
    expect(validateEAN(9783815820865)).toBe(true);
  });

    it('should return hello', () => {
    expect(validateEAN(9783815820865)).toBe(true);
  });

});
