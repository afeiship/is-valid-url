import fn from '../src';

describe('api.basic', () => {
  test('normail single value case', () => {
    expect(fn('https://www.baidu.com')).toBe(true);
    expect(fn('www.baidu.com')).toBe(false);
    expect(fn('/hello-world?hello')).toBe(false);
  });
});
