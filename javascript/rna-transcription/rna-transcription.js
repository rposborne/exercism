var DnaTranscriber = function() {};

DnaTranscriber.prototype.rnaMap = {
    "A" : "U",
    "G" : "C",
    "C" : "G",
    "T" : "A"
}

DnaTranscriber.prototype.toRna = function(dnaFragment) {
  var rnaFragment = "";
  var self = this;
  dnaFragment.split("").forEach(function (dna) {
    rnaFragment += self.toRnaNucleotide(dna);
  });
  return rnaFragment;
};

DnaTranscriber.prototype.toRnaNucleotide = function(dnaFragment) {
  return this.rnaMap[dnaFragment];
};

module.exports = DnaTranscriber;
