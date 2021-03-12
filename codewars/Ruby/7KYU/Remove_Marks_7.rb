=begin

Description:

Remove words from the sentence if it contains one exclamation mark. Words are separated by spaces in the sentence. Please remember, one.

Examples

remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"

=end

# My Solution
def remove(s)
  result = []
  s.split(' ').each { |x| (x.chars.count '!') != 1 ? result << x : x.clear }
  result.join(' ')
end

# Better Solution
def remove(s)
  s.split.reject { |word| word.count('!') == 1 }.join(' ')
end
