=begin

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

=end

# My Solution
def spinWords(s)
  s.split(/ /).map { |x| x.length >= 5 ? x.reverse : x }.join(' ')
end

# Better Solution
def spinWords(string)
  string.gsub(/\w{5,}/, &:reverse)
end
