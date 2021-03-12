=begin

Making Change
Write a method make_change (makeChange in JavaScript) that will determine the minimum number of coins needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in JavaScript.

The argument passed in will be an integer representing the value in cents. The return value should be a hash (an object in JavaScript) with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

Ruby examples:

make_change(0) --> {}
make_change(1) --> {:P=>1}
make_change(43) --> {:Q=>1, :D=>1, :N=>1, :P=>3}
make_change(91) --> {:H=>1, :Q=>1, :D=>1, :N=>1, :P=>1}

=end

# My Solution
def make_change(amount)
  values = [50,25,10,5,1]
  keys = [:H,:Q,:D,:N,:P]
  r = {}

  values.each do |x|
    dv = amount.divmod(x)
    amount = dv[1]
    r.merge!(keys[values.index(x)] => dv[0]) unless dv[0].zero?
  end
  r
end

# Better Solution
def make_change(amount)
  coins = { H: 50, Q: 25, D: 10, N: 5, P: 1 }
  coins.each_with_object({}) { |(k, v), h| h[k], amount = amount/v, amount%v if amount >= v }
end

# Another Solution
def make_change(amount)
  { H:50, Q:25, D:10, N:5, P:1 }.inject({}) do |res, (k,v)| 
    change, amount = amount.divmod(v)
    res[k] = change unless change==0
    res
  end
end
