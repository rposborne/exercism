module Complement
  VERSION = 3
  RNA_PAIRS = {
    "A" => "U",
    "G" => "C",
    "C" => "G",
    "T" => "A"
  }.freeze

  def self.of_dna(rna)
    rna.each_char.map { |c| complement(c) }.join
  end

  def self.complement(single_rna)
    raise ArgumentError, "No RNA complement known" \
                         unless RNA_PAIRS.include?(single_rna)
    RNA_PAIRS[single_rna]
  end
end
