=begin

Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples:

sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8

=end

# My Solution
def sum_cubes(n)
  (1..n).map{|x| x**3}.sum
end

# Better Solution
def sum_cubes(n)
  (1..n).sum { |i| i**3 }
end
