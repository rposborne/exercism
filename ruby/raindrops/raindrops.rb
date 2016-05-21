module Raindrops
  VERSION = 1
  SOUNDS = {
    3 => "Pling",
    5 => "Plang",
    7 => "Plong"
  }.freeze

  class << self
    def convert(num)
      build_sounds(num, divisors(num))
    end

    def build_sounds(num, divisors)
      return num.to_s if divisors.empty?
      divisors.reduce("") { |a, e| a + SOUNDS[e] }
    end

    def divisors(num)
      SOUNDS.keys.select { |div| num % div == 0 }
    end
  end
end
