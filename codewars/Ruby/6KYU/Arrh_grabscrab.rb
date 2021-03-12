=begin

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

Good luck!
=end

# My Solution
def grabscrab(anagram, dictionary)
  dictionary.map { |word| word if word.chars.sort == anagram.chars.sort }.compact
end

# Better Solution
def grabscrab(anagram, dictionary)
  dictionary.select { |w| anagram.chars.sort == w.chars.sort }
end

# Another Solution
def grabscrab(s, dct)
    s = s.chars.sort
    return dct.select { |w| w.chars.sort == s }
end
