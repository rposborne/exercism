module RomanNumerals
  VERSION = 1
  ROMANS = {
    1000 => "M",
    900 => "CM",
    500 => "D",
    400 => "CD",
    100 => "C",
    90 => "XC",
    50 => "L",
    40 => "XL",
    10 => "X",
    9 => "IX",
    5 => "V",
    4 => "IV",
    1 => "I"
  }.freeze

  def to_roman
    n = self
    ROMANS.each_with_object("") do |h, roman|
      roman << h[1] * (n / h[0])
      n %= h[0]
    end
  end
end

Fixnum.include(RomanNumerals)
