const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  domains.forEach(item => {
    let concatStr = '';
    let arr = item.split('.');

    for (let i = arr.length; i > 0; i--) {
      concatStr = concatStr + `.${arr[i - 1]}`;

      result[concatStr] = result.hasOwnProperty(concatStr) ? result[concatStr] + 1 : 1;
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
