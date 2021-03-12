=begin

Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false

=end

# My Solution
def arrCheck(value)
  !value.map { |n| n.is_a? Array }.include? false
end

# Better Solution
def arrCheck(value)
  value.all? { |e| e.is_a? Array }
end
