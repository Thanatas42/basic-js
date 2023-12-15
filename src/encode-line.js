const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let Indicator = 0;
  
  const result = [];
  
  for(let i = arr.length; i>0; i--) {
      if(arr[i-1] === arr[i-2]) { 
          Indicator++;
      } else {
          let concat = Indicator > 0 ? (Indicator+1)+arr[i-1] : arr[i-1];
          Indicator = 0;
          result.unshift(concat)
      }
  }
  
  return result.join('');
}

module.exports = {
  encodeLine
};
