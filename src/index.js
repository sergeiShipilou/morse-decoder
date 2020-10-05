const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  
  let WORD_STEP = 10;
  let MORSE_STEP = 2;

  let CIPHER_MORSE = {
    '10':  '.',
    '11':  '-',
    '**':  ' ',
    '00':   ''
  };

  let parse = function(expr, step) {

    let result = [];
    let index = 0;

    while (index < expr.length) {
      result.push(expr.slice(index, index += step));
    }
    return result;
  }

  let bitCode = parse(expr, WORD_STEP)
    .map(function(item) {
      return parse(item, MORSE_STEP)
        .map(function(item) {
          return CIPHER_MORSE[item];
        }).join('');
    });

  return bitCode.map(function(item) {
    if (item === '     ') return ' ';
    else return MORSE_TABLE[item];
  }).join('');

}

module.exports = {
    decode
}