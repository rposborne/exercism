'use strict';
module.exports = function(formattedNumber) {
  const sterilize = () => {
    let digits = formattedNumber.match(/\d/g);

    if (Number(digits[0]) === 1 && digits.length === 11) {
      digits.shift()
    } else if (digits.length !== 10) {
      digits = '0000000000'.split('');
    }

    return digits.join('');
  };

  const format = (num) =>
    `(${this.areaCode()}) ${num.slice(3,6)}-${num.slice(6,10)}`;

  this.num = sterilize();
  this.number = () => this.num;
  this.areaCode = () => this.num.slice(0, 3);
  this.toString = () => format(this.num);
};
