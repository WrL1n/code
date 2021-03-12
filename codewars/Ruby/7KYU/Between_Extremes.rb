=begin

Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimun of two elements.

=end

# My Solution
def between_extremes(numbers)
  numbers.max - numbers.min
end

# Better Solution
def between_extremes(numbers)
  numbers.max - numbers.min
end
