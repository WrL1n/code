=begin

Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

Note: Of course you can't do half a fold. You should know what this means ;P

Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

=end

# My Solution
def fold_to(distance)
  s = 0.0001
  i = 0

  if distance < 0
    nil
  else
    while s < distance
      s += s
      i += 1
    end
    i
  end
end

# Better Solution
def fold_to(distance)
  distance.positive? ? [Math.log2(distance.fdiv(0.0001)).ceil, 0].max : nil
end
