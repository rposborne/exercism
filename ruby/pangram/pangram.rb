module Pangram
  VERSION = 1
  ALPHABET_LENGTH = 26

  def is_pangram?(str)
    (alphabet & str.downcase.scan(/\w/)).size == ALPHABET_LENGTH
  end

  def alphabet
    ("a".."z").to_a
  end

  Pangram.extend(Pangram)
end
