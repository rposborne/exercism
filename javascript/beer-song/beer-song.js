module.exports = function() {
  'use strict';
  const item = (num) => num > 1 ? 'one' : 'it';

  const bottlesLeft = (numOfBottles) => {
    if (numOfBottles > 1) {
      return numOfBottles + ' bottles';
    } else if (numOfBottles === 1) {
      return '1 bottle';
    } else {
      return 'No more bottles';
    }
  };

  const pluralHalf = (verse) =>
    `Take ${item(verse)} down and pass it around, ${bottlesLeft(
            verse - 1).toLowerCase()} of beer on the wall.\n`;

  const finalHalf =
    'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

  const firstHalf = (verse) =>
    bottlesLeft(verse) + ' of beer on the wall, ' + bottlesLeft(
      verse).toLowerCase() + ' of beer.\n';

  const secondHalf = (verse) => {
    if (verse >= 1) {
      return pluralHalf(verse);
    } else {
      return finalHalf;
    }
  };

  const verse = (verse) =>
    firstHalf(verse) + secondHalf(verse);

  const sing = (from, to = 0) => {
    var song = [];
    for (var i = from; i >= to; i--) {
      song.push(verse(i));
    }
    return song.join('\n');
  };

  return {
    verse: verse,
    sing: sing
  };
};
