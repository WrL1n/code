=begin

The sports centre needs repair. Vandals have been kicking balls so hard into the roof that some of the tiles have started sticking up. The roof is represented by x.

As a quick fix, the committee have decided to place another old roof over the top, if they can find one that fits. This is your job.

A 'new' roof (s) will fit if it currently has a hole in it at the location where the old roof has a tile sticking up.

Sticking up tiles are represented by either '\' or '/'. Holes in the 'new' roof are represented by spaces (' '). Any other character can not go over a sticking up tile.

Return true if the new roof fits, false if it does not.

=end

# My Solution
def roof_fix(r1,r2)
  r1_i = r1.chars.map.with_index { |x, i| i if x == ' ' }.compact

  r2_i = r2.chars.map.with_index { |x, i| i if x == '/' or x == "\\" }.compact

  flag = true
  r2_i.each { |x| flag = false unless r1_i.include?(x) }
  flag
end

# Better Solution
def roof_fix(s, x)
  x.chars.zip(s.chars).all? { |x, s| x == '_' || s == ' ' }
end

# Another Solution
def roof_fix(f,r)
   f.each_char.with_index do |x,idx|
     !(x[/ /]) && r[idx][/[\\\/]/] ? @answer = false : @answer = true
     break if @answer == false
   end
   @answer
end
