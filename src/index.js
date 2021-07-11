const ones= {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
}
const tens = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}
const prefixes = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}
const suffixes = {
  '': 1,
  'thousand': 2,
  'million': 3,
  'billion': 4,
  'trillion': 5

}
module.exports = function toReadable (number) {
  

  let numText = "";
  
  let absNum = Math.abs(number);

      /* try {
        if(number > numLimit) {
          throw 'Error'
        }
      }
      catch  */
      /* if(number.toString().includes("-") && abs != 0){
        numText += 'negative '
      }

       */
      numText += threeDigitConvert(absNum)
      return numText;

}

function threeDigitConvert(number) {
  let currentNumText = "";

  if(number == 0){
    return "";
  }

  if(number < 100){
    currentNumText += twoDigitOrLessConvert(number);
    return currentNumText;
  }

  currentNumText += ones[number.toString().charAt(0)];
  currentNumText += " hundred ";

  if(number.toString().substr(1) !== "00"){
    currentNumText += twoDigitOrLessConvert(parseInt(number.toString().substr(1)));
  }

  return currentNumText;

}

function twoDigitOrLessConvert(number) {
  let currentNumText = "";

  if(number < 10){
    return ones[number]
  }

  if(number in tens){
    currentNumText += tens[number];
  }else{
    currentNumText += prefixes[number.toString().charAt(0)];
    
    if(number.toString().charAt(1) !== "0") {
      currentNumText += " " + ones[number.toString().charAt(1)];
    }
  }
  return currentNumText;
}
