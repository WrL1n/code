=begin

Observe the process with the array given below and the tracking of the sums of each corresponding array.

[5, 3, 6, 10, 5, 2, 2, 1] (34) ----> [5, 3, 6, 10, 2, 1] ----> (27) ------> [10, 6, 5, 3, 2, 1]  ----> [4, 1, 2, 1, 1] (9) -----> [4, 1, 2] (7)
The tracked sums are : [34, 27, 9, 7]. We do not register one of the sums. It is not difficult to see why.

We need the function track_sum(), (trackSum(), Javascript) that receives an array and outputs an array with the following result in the order given below:

array with the tracked sums obtained in the process

final array

So for our example given above, the result will be:

track_sum([5, 3, 6, 10, 5, 2, 2, 1]) == [[34, 27, 9, 7], [4, 1, 2]]
You will find more cases in the Example Tests Cases.

Have a good time!

=end

# My Solution
def track_sum(arr)
  sum1 = arr.reduce(&:+)
  sum2 = arr.uniq.reduce(&:+)
  arr = arr.uniq.sort.reverse
  arr = arr.each_with_index.map { |x, i| x - arr[i + 1] if arr[i + 1] != nil }.compact
  sum3 = arr.reduce(&:+)
  sum4 = arr.uniq.reduce(&:+)
  final_array = arr.uniq
  return [[sum1, sum2, sum3, sum4], final_array]
end

# Better Solution
def track_sum(arr)
  arr1 = arr.uniq
  arr2 = arr1.sort.reverse
  arr3 = arr2.each_cons(2).map { |x, y| x - y }
  arr4 = arr3.uniq
  return [[arr.sum, arr1.sum, arr3.sum, arr4.sum], arr4]
end

# Another Solution
def track_sum(arr)
  a1 = arr
  sum1 = a1.sum
  a2 = a1.uniq
  sum2 = a2.sum
  a3 = a2.sort.reverse
  a4 = a3.zip(a3[1..-1]).map { |a, b| a - b rescue nil }.compact
  sum3 = a4.sum
  final_array = a4.uniq
  sum4 = final_array.sum
  return [[sum1, sum2, sum3, sum4], final_array]
end
