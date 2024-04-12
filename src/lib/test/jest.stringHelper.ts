import StringHelper from '../stringHelper';

describe('StringHelper', () => {
  describe('isEmpty', () => {
    it('should return true for undefined', async () => {
      expect(await StringHelper.isEmpty(undefined)).toBe(true);
    });

    it('should return true for null', async () => {
      expect(await StringHelper.isEmpty(null)).toBe(true);
    });

    it('should return true for an empty string', async () => {
      expect(await StringHelper.isEmpty('')).toBe(true);
    });

    it('should return false for a non-empty string', async () => {
      expect(await StringHelper.isEmpty('not empty')).toBe(false);
    });
  });
});