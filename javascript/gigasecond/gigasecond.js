module.exports = function(time) {
  'use strict';

  this.date = function() {
    return new Date(time.getTime() + 1000000000 * 1000);
  };
};
