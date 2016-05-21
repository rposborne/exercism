Array.prototype.unique = function() {
  'use strict';

  var n = {},
    r = [];
  for (var i = 0; i < this.length; i++) {
    if (!n[this[i]]) {
      n[this[i]] = true;
      r.push(this[i]);
    }
  }
  return r;
}


module.exports = function(str) {
  'use strict';

  this.isIsogram = function() {
    var chars = str.toLowerCase().match(/\w/g);
    return chars.length === chars.unique().length;
  };
};
