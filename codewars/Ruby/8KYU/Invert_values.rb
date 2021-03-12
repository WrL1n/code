=begin

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers.

=end

# My Solution
def invert(list)
  list.map { |x| -x }
end

# Better Solution
def invert(list)
  list.map(&:-@)
end

# Another Solution
def invert(list)
  list.map { |n| n*-1 }
end
