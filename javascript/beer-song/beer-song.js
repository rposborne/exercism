module.exports = function() {
  'use strict';

  var finalPhrase =
    'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

  var bottlesLeft = function(numOfBottles) {
    if (numOfBottles > 1) {
      return numOfBottles + ' bottles';
    } else if (numOfBottles === 1) {
      return '1 bottle';
    } else {
      return 'No more bottles';
    }
  };

  var item = function(num) {
    if (num > 1) {
      return 'one';
    } else {
      return 'it';
    }
  };

  var secondSentence = function(verse) {
    if (verse >= 1) {
      return 'Take ' + item(verse) +
        ' down and pass it around, ' + bottlesLeft(verse - 1).toLowerCase() +
        ' of beer on the wall.\n';
    } else {
      return finalPhrase;
    }
  };

  this.verse = function(verse) {
    return bottlesLeft(verse) + ' of beer on the wall, ' + bottlesLeft(
      verse).toLowerCase() + ' of beer.\n' + secondSentence(verse);
  };

  this.sing = function(from, to = 0) {
    var song = [];
    for (var i = from; i >= to; i--) {
      song.push(this.verse(i));
    }
    return song.join('\n');
  };
};
