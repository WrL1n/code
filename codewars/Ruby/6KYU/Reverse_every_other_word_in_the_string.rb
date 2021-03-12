=begin

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.

=end

# My Solution
def reverse_alternate(string)
  string.split(' ').map.each_with_index {|item,index| index.odd? ? item.reverse : item}.join(' ')
end

# Better Solution
def reverse_alternate(string)
  string.split.map.with_index{|w,i| i.odd? ? w.reverse : w}.join(' ')
end

# Another Solution
def reverse_alternate(string)
  string.gsub(/(\S )(\S*)/){$1+$2.to_s.reverse}
end
