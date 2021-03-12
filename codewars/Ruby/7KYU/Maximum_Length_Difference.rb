=begin

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

#Example:

s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(s1, s2) --> 13

=end

# My Solution
def mxdiflg(s1, s2)
  s1_min = s1.map(&:length).min
  s1_max = s1.map(&:length).max
  s2_min = s2.map(&:length).min
  s2_max = s2.map(&:length).max

  (s1_max - s2_min).abs > (s1_min - s2_max).abs ? (s1_max - s2_min).abs : (s1_min - s2_max).abs
end

# Better Solution
def mxdiflg(a1, a2)
  # your code
  if a1.empty? || a2.empty?
    return -1
  end
  a1.product(a2).map {|x,y| (x.length - y.length).abs}.max
end

# Another Solution
def mxdiflg(a1, a2)
  return -1 if a1.empty? || a2.empty?
  min1, max1 = a1.map(&:size).minmax
  min2, max2 = a2.map(&:size).minmax
  [max1 - min2, max2 - min1].max
end
