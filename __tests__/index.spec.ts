import fn from '../src';

describe('api.basic', () => {
  test('1. 基本HTTP URL', () => {
    expect(fn('http://www.baidu.com')).toBe(true);
    expect(fn('https://www.baidu.com')).toBe(true);
    expect(fn('http://example.com')).toBe(true);
  });

  test('2.含有子域名的URL', () => {
    expect(fn('https://subdomain.example.com')).toBe(true);
    expect(fn('http://sub.subdomain.example.com')).toBe(true);
    expect(fn('https://dev.subdomain.example.com')).toBe(true);
  });

  test('3.不同协议的URL：', () => {
    //     http://www.example.com
    // ftp://ftp.example.com
    // mailto:contact@example.com
    expect(fn('http://www.example.com')).toBe(true);
    expect(fn('ftp://ftp.example.com')).toBe(false);
    // expect(fn('mailto:contact@example.com')).toBe(false);
  });

  test('4.含有端口号的URL：', () => {
    //     http://www.example.com:8080
    // https://example.com:8443
    expect(fn('http://www.example.com:8080')).toBe(true);
    expect(fn('https://example.com:8443')).toBe(true);
  });

  test('5.带有查询参数的URL：', () => {
    //     https://www.example.com/page?param1=value1&param2=value2
    // http://www.example.com/search?q=keyword
    expect(fn('https://www.example.com/page?param1=value1&param2=value2')).toBe(true);
    expect(fn('http://www.example.com/search?q=keyword')).toBe(true);
  });

  test('6.包含特殊字符的URL：', () => {
    //     https://www.example.com/has%20space
    // https://www.example.com/page%2Fsubpage
    expect(fn('https://www.example.com/has%20space')).toBe(true);
    expect(fn('https://www.example.com/page%2Fsubpage')).toBe(true);
  });

  test('7.无效的URL：', () => {
    // //www.example.com (缺少协议)
    // htt: www.example.com(缺少协议);
    expect(fn('//www.example.com')).toBe(false);
    expect(fn('htt: www.example.com')).toBe(false);
  });

  test('8.IP地址作为域名的URL：', () => {
    //     https://192.168.0.1
    // http://127.0.0.1
    expect(fn('https://192.168.0.1')).toBe(true);
    expect(fn('http://127.0.0.1')).toBe(true);
  });
});
