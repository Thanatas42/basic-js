const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let resultArr = arr.filter((item) => {
    return item !== -1;
  })
  console.log(resultArr);
  resultArr.sort((a, b) => {
    if (a < b)
      return -1;
    else
      return 1;
  });
  arr.forEach((item, index) => {
    if (item === -1) {
      resultArr.splice(index, 0, item);
    }
  })

  return resultArr;
}

module.exports = {
  sortByHeight
};
