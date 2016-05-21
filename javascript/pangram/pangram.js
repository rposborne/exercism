module.exports = function(str) {
  'use strict';

  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  this.isPangram = function() {
    var chars = str.toLowerCase().match(/\w/g) || [];

    var intersection = alphabet.filter(function(n) {
      return chars.indexOf(n) !== -1;
    });

    return intersection.length === alphabet.length;
  };
};
