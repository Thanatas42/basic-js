const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  _checkArgs(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined')
      throw new Error('Incorrect arguments!');
  }

  encrypt(message, key) {
    this._checkArgs(message, key);
    message = message.toUpperCase();

    let arrMessage = message.split('');
    const stringMessage = arrMessage.join('');
    while (key.length < stringMessage.length) {
      key += key;
    }
    key = key.slice(0, stringMessage.length).toUpperCase().split('');

    let arr = arrMessage.map((char, index) => {
      if (char === ' ') {
        key.splice(index, 0, ' ');
      }
      const charNum = char.charCodeAt();

      if (65 <= charNum && charNum <= 90) {
        let criptChar = charNum + (key[index].charCodeAt() - 65);

        if (criptChar > 90) {
          criptChar = criptChar - 26;
        }

        return String.fromCharCode(criptChar);
      } else {
        return char;
      }
    });

    return this.type ? arr.join('') : arr.reverse().join('');
  }

  decrypt(message, key) {
    this._checkArgs(message, key);

    let arrMessage = message.split('');
    const stringMessage = message.split(' ').join('');
    while (key.length < stringMessage.length) {
      key += key;
    }
    key = key.slice(0, stringMessage.length).toUpperCase().split('');

    let arr = arrMessage.map((char, index) => {
      if (char === ' ') {
        key.splice(index, 0, ' ');
      }
      const charNum = char.charCodeAt();
      if (65 <= charNum && charNum <= 90) {

        let decriptChar = charNum - (key[index].charCodeAt() - 65);

        if (decriptChar < 65) {
          decriptChar = decriptChar + 26;
        }
        return String.fromCharCode(decriptChar);
      } else {
        return char;
      }
    });

    return this.type ? arr.join('') : arr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
