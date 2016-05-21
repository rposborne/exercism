module.exports = function(str) {
  'use strict';

  this.isIsogram = function() {
    var chars = str.toLowerCase().match(/\w/g);
    var charSet = new Set(chars);

    return chars.length === charSet.size;
  };
};
