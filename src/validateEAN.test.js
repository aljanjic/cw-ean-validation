const validateEAN = require('./validateEAN');

describe('validateEAN', () => {
  it('9783815820865 should return true', () => {
    expect(validateEAN('9783815820865')).toBe(true);
  });

  it('9783815820864 should return false', () => {
    expect(validateEAN('4003301018392')).toBe(false);
  });

    it('9783827317100 should return true', () => {
    expect(validateEAN('9783827317100')).toBe(true);
  });

});
