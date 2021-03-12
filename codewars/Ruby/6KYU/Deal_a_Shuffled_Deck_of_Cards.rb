=begin

#INFO#

A normal deck of 52 playing cards contains suits ['H', 'C', 'D', 'S'] - Hearts, Clubs, Diamonds, Spades respectively - and cards with values from Ace (1) to King (13) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

#Your Task#

Build a function ordered_deck that returns a shuffled deck of 52 playing cards without repeats.

Each card should have format "#{suit} #{value}" e.g. the Queen of Hearts is "H 12" and the Ace of Spades is "S 1". The order of the cards must be different each time the function is called.

=end

# My Solution
def shuffled_deck
  value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  value.shuffle.flat_map { |x| ["H #{x}", "C #{x}", "D #{x}", "S #{x}"] }
end

# Better Solution
def shuffled_deck
  (1..13).map { |i| 'HCDS'.chars.map { |j| "#{j} #{i}" } }.flatten.shuffle
end

# Another Solution
def shuffled_deck
  'HCDS'.chars.product((1..13).to_a).map { |a| a.join(' ') }.shuffle
end
