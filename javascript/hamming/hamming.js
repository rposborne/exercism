var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
  if (a.length != b.length) {
    throw "DNA strands must be of equal length.";
  }

  var distance = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
        distance += 1;
    }
  }
  return distance;
};

module.exports = Hamming;
