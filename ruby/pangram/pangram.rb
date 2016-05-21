module Pangram
  VERSION = 1
  def self.is_pangram?(str)
    str
      .downcase
      .each_char
      .each_with_object(alphabet) { |e, a| a[e] = 1 if a.key?(e) }
      .all? { |_, v| v > 0 }
  end

  def self.alphabet
    Hash[("a".."z").map { |a| [a, 0] }]
  end
end
