=begin

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160

=end

# My Solution
def find_outlier(n)
  n.count { |x| x % 2 == 0 } == 1 ? n.select { |x| x % 2 == 0 }.pop : n.select { |x| x % 2 == 1 }.pop
end

def find_outlier(integers)
  integers.partition(&:odd?).find(&:one?).first
end
