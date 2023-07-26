declare var wx: any;

// https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/

const URL_RE = new RegExp(
  '^(https?:\\/\\/)?' + // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
    '(\\#[-a-z\\d_]*)?$',
  'i'
);

const isValidUrl = (inString): boolean => {
  if (typeof inString !== 'string') return false;
  return URL_RE.test(inString);
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = isValidUrl;
}

export default isValidUrl;
