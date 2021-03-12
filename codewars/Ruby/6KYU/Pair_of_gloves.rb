=begin

Winter is comming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

A pair of gloves is constituted of two gloves of the same color.

You are given an array containing the color of each glove.

You must return the number of pair you can constitute.

You must not change the input array.

Example :

my_gloves = ["red","green","red","blue","blue"]
number_of_pairs(my_gloves) == 2;// red and blue

red_gloves = ["red","red","red","red","red","red"];
number_of_pairs(red_gloves) == 3; // 3 red pairs

=end

# My Solution
def number_of_pairs(gloves)
  gloves.uniq.map { |color| gloves.count(color).div(2) }.sum
end

# Better Solution
def number_of_pairs(gloves)
  gloves.uniq.map{|color|gloves.count(color)/2}.inject 0,:+
end

# Another Solution
def number_of_pairs(gloves)
  gloves.each_with_object(Hash.new(0)) { |c, frq| frq[c] += 1 }.values.reduce(0) { |s, v|s += v/2 }
end
