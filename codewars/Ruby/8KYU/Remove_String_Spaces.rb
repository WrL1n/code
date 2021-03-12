=begin

Simple, remove the spaces from the string, then return the resultant string.

=end

# My Solution (shame)
def no_space(x)
  x.split.map {|s| s.chomp}.join
end

# Better Solution
def no_space(x)
  x.delete(' ')
end

# Another Solution
def no_space(x)
  x.gsub(/\s/,"")
end