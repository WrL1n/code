=begin

You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

=end

# My Solution
def explode arr
  new_arr = []
  #arr.map(&:to_i).sum != 0 ? arr.map(&:to_i).sum.times { new_arr << arr } : 'Void!'

  if arr.map(&:to_i).sum != 0
    arr.map(&:to_i).sum.times { new_arr << arr }
    new_arr
  else
    'Void!'
  end
end

# Better Solution
def explode arr
  b = []
  a = arr.map(&:to_i).reduce(&:+).times{|i| b << arr}
  b == [] ? "Void!" : b
end

# Another Solution
def explode(arr)
  score = arr.select{|i| i.is_a?(Integer)}.sum rescue 0
  return 'Void!' if score.zero?
  (0...score).map{|i| arr}
end
