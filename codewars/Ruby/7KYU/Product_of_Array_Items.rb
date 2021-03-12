=begin

Calculate the product of all elements in an array.

If the array is nil or is empty, the function should return nil.

=end

# My Solution
def product(arr)
  arr.reduce(:*) if arr != nil
end

# Better Solution
def product(arr)
  arr&.reduce(:*)
end

# Another Solution
def product(arr)
  arr.reduce(:*) rescue nil
end
