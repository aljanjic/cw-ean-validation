const validateEAN = require('./validateEAN');

describe('validateEAN', () => {
  it('should return hello', () => {
    expect(validateEAN()).toBe('hello');
  });

});
