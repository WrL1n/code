=begin

This challenge extends the previous repeater() challenge. Just like last time, your job is to write a function that accepts a string and a number as arguments. This time, however, you should format the string you return like this:

>>> repeater('yo', 3)
'"yo" repeated 3 times is: "yoyoyo"'
>>> repeater('WuB', 6)
'"WuB" repeated 6 times is: "WuBWuBWuBWuBWuBWuB"'

=end

# My Solution
def repeater(string, n)
  "\"#{string}\" repeated #{n} times is: \"#{string * n}\""
end

# Better Solution
def repeater(string, n)
  %("#{string}" repeated #{n} times is: "#{string * n}")
end
