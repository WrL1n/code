=begin

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

=end

# My Solution
def abbrev_name(name)
  name.split.map { |x| x[0].upcase }.join('.')
end

# Better Solution
def abbrev_name(name)
  name.split.map { |s| s[0] }.join('.').upcase
end

# Another Solution
def abbrev_name(name)
  name.scan(/\b(\w)/).join('.').upcase
end
