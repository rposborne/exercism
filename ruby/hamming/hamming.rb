module Hamming
  VERSION = 2
  def self.compute(this, that)
    raise ArgumentError, "Nucleotides must be the same length" \
                         unless this.size == that.size
    this.size.times.count { |i| that[i] != this[i] }
  end
end
