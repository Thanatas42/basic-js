const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let count = n;

  while (count.toString().length > 1) {
    let counts = count.toString().split('');
    let sum = 0;

    counts.forEach((item) => {
      sum += item * 1;
    })

    count = sum;
  }

  return count;
}

module.exports = {
  getSumOfDigits
};
