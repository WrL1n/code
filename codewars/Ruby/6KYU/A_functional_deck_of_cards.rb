=begin

Details Kata

=end

# My Solution
cards = %w[ace two three four five six seven eight nine ten jack queen king]
cards = cards.flat_map { |x| [x + ' of hearts', x + ' of spades', x + ' of diamonds', x + ' of clubs'] }

# Better Solution
# Build a deck of cards where each card resembles "ace of hearts"
RANKS = %w[ace two three four five six seven eight nine ten jack queen king]
SUITS = %w[hearts clubs spades diamonds]
cards = RANKS.flat_map { |rank| SUITS.map { |suit| "#{ rank } of #{ suit }" } } 

# Another Solution
suits = %w[hearts spades diamonds clubs]
values = %w[ace two three four five six seven eight nine ten jack queen king]
# Note: `flat_map` not actually needed, `map` is fine. Not sure why it's required..
cards = values.product(suits).flat_map{ |value, suit| "#{value} of #{suit}" }
