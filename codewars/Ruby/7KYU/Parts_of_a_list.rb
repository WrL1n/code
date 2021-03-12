=begin

Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Example:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

=end

# My Solution
def partlist(arr)
  answer = []
  (arr.size - 1).times do |i|
    answer << [arr.take(i + 1).join(' '), arr.drop(i + 1).join(' ')]
  end
  answer
end

# Better Solution
def partlist(arr)
  (1...arr.size).map { |i| [arr.take(i).join(' '), arr.drop(i).join(' ')] }
end

# Another Solution
def partlist(arr)
  (1...arr.size).map { |n| [arr.first(n).join(' '), arr.last(arr.size - n).join(' ')] }
end
