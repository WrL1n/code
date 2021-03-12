=begin

Create a function squares(x,n) that starts with a number (x) and returns an array of length (n) with squares of the previous number. If n is negative or zero, return an empty array/list.

=end

# My Solution
def squares(x, n)
  result = []

  if n > 0
    result << x
    (n - 1).times { result << result.last**2 }
  end

  result
end

# Better Solution
def squares(x, n)
  (0...n).map{|i| x ** (2 ** i)}
end

# Another Solution
def squares(x, n)
  arr = []
  result = []
  result[0] = x
  #evaluates if n is negative or zero
  if n == 0 or n < 0
    return arr
  else
    for i in(1..n-1)
      result[i] = x**2
      x = x**2
    end
  end
  return result
end
