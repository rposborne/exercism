class Squares
  VERSION = 2
  attr_reader :range
  private :range

  def initialize(num)
    @range = 1..num
  end

  def square_of_sum
    range.reduce(0, :+)**2
  end

  def sum_of_squares
    range.reduce(0) { |a, e| a + e**2 }
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
