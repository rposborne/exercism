module.exports = function() {
  'use strict';

  this.count = function(paragraph) {
    var histogram = {};
    var words = paragraph.toLowerCase().trim().split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      var word = words[i];

      if (histogram.hasOwnProperty(word)) {
        histogram[word]++;
      } else {
        histogram[word] = 1;
      }

    }
    return histogram;
  };
};
