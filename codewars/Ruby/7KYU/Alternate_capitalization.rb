=begin
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!
=end

# My Solution
def capitalize(s)
  el = s.split('').map.with_index {|x,i| i % 2 === 0 ? x.upcase : x}.join('')
  [el, el.swapcase]
end

# Better Solution
def capitalize(s)
  result = s.gsub /.{1,2}/, &:capitalize
  [result, result.swapcase]
end

# Another Solution
def capitalize(s)
  result = s.split("").each_with_index.map {|x,i| i%2 == 0 ? x : x.upcase  }.join
  return [result.swapcase, result]
end

# Another Solution
def capitalize(s)
  res = []
  res << s.chars.map.with_index { |c, i| i % 2 == 0 ? c.upcase : c }.join
  res << res.first.swapcase
end

# Another Solution
def capitalize(str)
  f = ->str { str.scan(/\w{1,2}/).map(&:capitalize).join }
  [f.(str), str[0] + f.(str[1..-1])]
end
