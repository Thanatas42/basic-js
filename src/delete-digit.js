const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digitStr = n.toString().split('');
  let digit = 0;

  digitStr.forEach((item, index) => {
    let result = digitStr.filter((item, indx) => {
      return indx !== index;
    })

    digit = result.join('') * 1 > digit ? result.join('') * 1 : digit;
  })

  return digit;
}

module.exports = {
  deleteDigit
};
