const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const str1 = s1.split('');
  const str2 = s2.split('');

  let smallString,
    bigString;
  let match = 0;

  if (str2.length >= str1.length) {
    smallString = str1;
    bigString = str2;
  } else {
    smallString = str2;
    bigString = str1;
  }

  smallString.forEach(item => {
    const findIndex = bigString.indexOf(item);

    if (findIndex > -1) {
      bigString.splice(findIndex, 1);
      match++
    }
  });

  return match;
}

module.exports = {
  getCommonCharacterCount
};
