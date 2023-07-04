const validateEAN = require('./validateEAN');

describe('validateEAN', () => {
  it('9783815820865 should return true', () => {
    expect(validateEAN('9783815820865')).toBe(true);
  });

  it('4003301018398 should return false', () => {
    expect(validateEAN('4003301018398')).toBe(true);
  });

    it('9783827317100 should return true', () => {
    expect(validateEAN('9783827317100')).toBe(true);
  });

});
