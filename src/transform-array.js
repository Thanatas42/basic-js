const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr && arr.length === 0)
    return arr;
  else if (!Array.isArray(arr))
    throw new Error('\'arr\' parameter must be an instance of the Array!');

  const commands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev']

  const result = Array.from(arr);

  result.forEach((item, index) => {
    if (typeof item !== 'number' && commands.includes(item)) {
      if (item === '--discard-next' && result[index + 1])
        result.splice(index, 2);
      else if (item === '--discard-prev' && result[index - 1])
        result.splice(index - 1, 1, { item: result[index - 1], remove: true });
      else if (item === '--double-next' && result[index + 1])
        result.splice(index, 1, result[index + 1]);
      else if (item === '--double-prev' && result[index - 1]) {
        result.splice(index, 1, result[index - 1]);
      }
    }
  });
  console.log(result)
  return result.filter((item, index) => {
    return !(item.remove === true || commands.includes(item));
  });
}

module.exports = {
  transform
};
