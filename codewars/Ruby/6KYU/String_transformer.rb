=begin

Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

=end

# My Solution
def string_transformer(str)
  str.reverse.gsub(/\w{2,}/,&:reverse).swapcase
end

# Better Solution
def string_transformer(str)
  str.split(/\b/).reverse.map(&:swapcase).join
end

# Another Solution
def string_transformer(str)
  str.swapcase.scan(/\w+|\W+/).reverse.join
end

# Another Solution
def string_transformer(str)
  str.split(/\s/, -1).reverse.join(' ').chars.map { |l| l.between?('a', 'z') ? l.upcase : l.downcase }.join
end
