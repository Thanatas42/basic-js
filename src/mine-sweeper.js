const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function checkState(firstArg, lastArg) {
    let count = 0;

    if (typeof firstArg !== 'undefined' && firstArg) {
      count += 1;
    }
    if (typeof lastArg !== 'undefined' && lastArg) {
      count += 1;
    }
    return count;
  }

  let resultArr = matrix.map((arr) => {
    return arr.slice();
  });

  matrix.forEach((matr, indx) => {
    matr.forEach((item, index) => {
      let count = checkState(matr[index - 1], matr[index + 1]);
      if (typeof resultArr[indx][index] === 'number') {
        resultArr[indx][index] += count;
      } else {
        resultArr[indx][index] = count;
      }

      if (item) {
        let topLine = resultArr[indx - 1];
        let botLine = resultArr[indx + 1];
        if (topLine) {
          if (typeof topLine[index - 1] !== 'undefined') {
            topLine[index - 1] += 1;
          }
          if (typeof topLine[index + 1] !== 'undefined') {
            topLine[index + 1] += 1;
          }
          topLine[index] += 1;
        }
        if (botLine) {
          if (typeof botLine[index - 1] !== 'undefined') {
            if (typeof botLine[index - 1] === 'number') {
              botLine[index - 1] += 1;
            } else {
              botLine[index - 1] = 1;
            }
          }
          if (typeof botLine[index + 1] !== 'undefined') {
            if (typeof botLine[index + 1] === 'number') {
              botLine[index + 1] += 1;
            } else {
              botLine[index + 1] = 1;
            }

          }
          if (typeof botLine[index] === 'number') {
            botLine[index] += 1;
          } else {
            botLine[index] = 1;
          }

        }
      }
    })
  })

  return resultArr;
}

module.exports = {
  minesweeper
};
