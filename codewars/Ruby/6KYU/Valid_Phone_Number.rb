=begin

Write a function that accepts a string, and returns true if it is in the form of a phone number. 
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses) 

Examples:

validPhoneNumber("(123) 456-7890")  =>  returns true
validPhoneNumber("(1111)555 2345")  => returns false
validPhoneNumber("(098) 123 4567")  => returns false

=end

# My Solution
def validPhoneNumber(phoneNumber)
  if
    phoneNumber.length == 14 &&
    phoneNumber.index('(') == 0 &&
    phoneNumber[1..3] >= '000' && phoneNumber[1..3] <= '999'&&
    phoneNumber.index(')') == 4 &&
    phoneNumber.index(' ') == 5 &&
    phoneNumber[6..8] >= '000' && phoneNumber[6..8] <= '999'&&
    phoneNumber.index('-') == 9 &&
    phoneNumber[10..14] >= '0000' && phoneNumber[10..14] <= '9999'
    true
  else
    false
  end
end

# Better Solution
def validPhoneNumber(phoneNumber)
  !!phoneNumber[/\A\(\d{3}\)\s\d{3}-\d{4}\z/]
end
