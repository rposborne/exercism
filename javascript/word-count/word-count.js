module.exports = function() {
  'use strict';

  var wordCounter = function(hist, word) {
    if (hist.hasOwnProperty(word)) {
      hist[word]++;
    } else {
      hist[word] = 1;
    }
    return hist;
  };

  this.count = function(str) {
    return str.toLowerCase().trim().split(/\s+/).reduce(wordCounter, {});
  };
};
