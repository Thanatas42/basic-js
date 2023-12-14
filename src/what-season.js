const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date)
    return 'Unable to determine the time of year!';
  else if (!(typeof date.getTime === 'function'))
    throw new Error('Invalid date!');

  let result;
  const seasons = [[1, 2, 12], [3, 4, 5], [6, 7, 8], [9, 10, 11]];

  seasons.forEach((item, index) => {
    if (item.includes(date.getMonth() + 1))
      result = index;
  })

  if (result === 0)
    return 'winter';
  else if (result === 1)
    return 'spring';
  else if (result === 2)
    return 'summer';
  else if (result === 3)
    return 'autumn';
}

module.exports = {
  getSeason
};
