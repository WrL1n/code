=begin
Write a function that reverses the bits in an integer.
For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
You can assume that the number is not negative.
=end

# My Solution
class Integer
  def reverse
    self.to_s(2).reverse.to_i(2)
  end
end
