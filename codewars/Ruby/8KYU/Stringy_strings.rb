=begin

Details Kata

=end

# My Solution (I'm pepega)
def stringy(size)
  s = '1'
  (size - 1).times { s = s[s.size - 1] == '1' ? s + '0' : s + '1' }
  s
end

# Better Solution
def stringy(size)
  (1..size).map { |i| i.even? ? '0' : '1' }.join('')
end

# Another Solution
def stringy(size)
  '10' * (size / 2) + '1' * (size % 2)
end
