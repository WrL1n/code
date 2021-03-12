=begin

Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

=end

# My Solution
def how_many_dalmatians(n)
  dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]
  respond = n <= 10 ? dogs[0] : (n <= 50 ? dogs[1] : (n < 101 ? dogs[2] : dogs[3]))
end

# Better Solution
def how_many_dalmatians(n)
  case
  when n <= 10 then "Hardly any"
  when n <= 50 then "More than a handful!"
  when n == 101 then "101 DALMATIONS!!!"
  else "Woah that's a lot of dogs!"
  end
end

# Another Solution
def how_many_dalmatians(n)
  dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]
  respond = n <= 10 ? dogs[0] : n <= 50 ? dogs[1] : n == 101 ? dogs[3] : dogs[2]
  respond
end
