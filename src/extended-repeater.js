const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  function generateStr(str, separator = '+', repeat = 1) {
    if (str === null)
      str = 'null'
    generated = new Array(repeat);
    generated.fill(str);
    return generated.join(separator);
  }

  const addition = generateStr(options.addition, options.additionSeparator ? options.additionSeparator : '|', options.additionRepeatTimes);
  console.log(addition);
  const result = generateStr(str + addition, options.separator, options.repeatTimes);

  return result;
}

module.exports = {
  repeater
};
