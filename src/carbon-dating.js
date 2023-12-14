const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && sampleActivity.trim()) {
    const integer = (sampleActivity * 1).toFixed(10) * 1;

    return (typeof integer === 'number') && (integer > 0 && integer <= MODERN_ACTIVITY) ?
      Math.ceil(-HALF_LIFE_PERIOD * Math.log2(integer / MODERN_ACTIVITY)) :
      false;
  }

  return false;
}

module.exports = {
  dateSample
};
