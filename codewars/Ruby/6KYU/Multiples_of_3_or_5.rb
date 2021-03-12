=begin

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

=end

# My Solution
def solution(number)
  arr = []
  3.upto(number - 1) { |x| arr << x if x.divmod(3)[1] == 0 || x.divmod(5)[1] == 0 }
  arr.sum
end

# Better Solution
def solution(number)
  (1...number).select { |i| i % 3 == 0 || i % 5 == 0 }.inject(:+)
end

# Another Solution
def solution(number)
  (1...number).select { |n| (n % 5).zero? || (n % 3).zero? }.reduce(:+)
end
