=begin

A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until n == 1 :

collatz sequence

 n = { n / 2 for even n ;
      3n + 1 for odd n }

A more detailed description of the collatz conjecture may be found on Wikipedia.

The Problem
Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:

"X0->X1->...->XN"

Where Xi is each iteration of the sequence and N is the length of the sequence.

Sample Input
collatz(4) # should return "4->2->1"
collatz(3) # should return "3->10->5->16->8->4->2->1"


=end

# My Solution
def collatz(n)
  s = n.to_s
  while n > 1
    n = n.even? ? n / 2 : n * 3 + 1
    s = s + "->#{n}"
  end
  s
end

# Better Solution
def collatz(n)
  result = [n]
  while n != 1
    n = n.even? ? n / 2 : 3 * n + 1
    result << n
  end
  result.join('->')
end

# Another Solution
def collatz(n)
  n>1? n.to_s+'->'+collatz( n%2==1? n*3+1 : n/2 ):'1'
end
