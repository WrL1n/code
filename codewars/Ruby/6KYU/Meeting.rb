=begin

John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

=end

# My Solution
def meeting(s)
  r = ""
  s.split(';').map {|x| x.upcase.split(':').reverse.join(', ')}.sort.each {|y| r += "(#{y})"}
  r
end

# Better Solution
def meeting(s)
  names =
    s
      .upcase
      .split(";")
      .map { |name| name.split(":") }
      .sort_by { |name, last| [last, name] }
      .map { |name, last| "(#{last}, #{name})" }
      .join
end

# Another Solution
def meeting(s)
  s.upcase
    .gsub(/(\w+):(\w+);?/, '(\2, \1);')
    .split(";")
    .sort
    .join
end

# Another Solution
def meeting(s)
  s.upcase
    .scan(/(\w+):(\w+);?/)
    .map { |first, last| "(#{last}, #{first})" }
    .sort
    .join
end

# Another Solution
def meeting(s)
  names = s.upcase.split(';').map{|s| s.split(':')}.sort_by{|a| [a.last, a.first] }
  names.map{|l,f| "(#{f}, #{l})"}.join
end
