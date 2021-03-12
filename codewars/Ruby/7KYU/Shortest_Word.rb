=begin

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

=end

# My Solution
def find_short(s)
  s.split.map { |x| x.size }.min
end

def find_short(s)
  s.split.map(&:size).min
end
