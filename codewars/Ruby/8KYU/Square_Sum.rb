=begin

Complete the square sum method so that it squares each number passed into it and then sums the results together.

For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.

=end

# My Solution
def squareSum(numbers)
  numbers.map { |x| x**2 }.sum
end

# Better Solution
def squareSum(numbers)
  numbers.map { |n| n * n } .reduce(:+)
end

# Another Solution
def squareSum(numbers)
  numbers.reduce { |s, n| s += n**2 }
end
