=begin

If you can't sleep, just count sheep!!

Task:
Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

Note:
You will always receive a positive integer.

=end

# My Solution
def count_sheep(num)
  s = ''
  1.upto(num) {|i|s += "#{i} sheep..."}
  s
end

# Better Solution
def count_sheep(num)
  (1..num).map {|i| "#{i} sheep..."}.join
end

# Another Solution
def count_sheep(num)
  (1..num).reduce('') { |string, count| string + "#{count} sheep..." }
end
