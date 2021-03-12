=begin

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd")    # "A-Bb-Ccc-Dddd"
accum("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt")    # "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

=end

# My Solution
def accum(s)
  final_str = ''

  0.upto(s.length -1) do |i|
    add_str = ''
    add_str = s[i].to_s * (i + 1)
    final_str = final_str + add_str.capitalize + '-'
  end
  final_str.chomp!('-')
  return final_str
end

def accum(s)
  s.chars.each_with_index.map { |c, i| c.upcase + c.downcase * i }.join('-')
end
