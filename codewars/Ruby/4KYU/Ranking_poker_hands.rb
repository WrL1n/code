=begin
A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold'em also online. Can you help them by writing an algorithm that can rank poker hands?

Task
Create a poker hand that has a method to compare itself to another poker hand:

compare_with(other_hand)
A poker hand has a constructor that accepts a string containing 5 cards:

PokerHand.new("KS 2H 5C JD TD")
The characteristics of the string of cards are:

Each card consists of two characters, where
The first character is the value of the card: 2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)
The second character represents the suit: S(pades), H(earts), D(iamonds), C(lubs)
A space is used as card separator between cards
The result of your poker hand compare can be one of these 3 options:

[ "Win", "Tie", "Loss" ]
Notes
Apply the Texas Hold'em rules for ranking the cards.
Low aces are NOT valid in this kata.
There is no ranking for the suits.
=end

# -------------------------- My Solution --------------------------
class Array
  def sort_by_desc!
    sort! { |a, b| b <=> a }
  end
end

class PokerHand
  attr_accessor :cards, :arr_highest_cards, :combination_index

  ROYAL_FLUSH_VALUES = %w[A K Q J T].freeze
  STRAIGHT_FLUSH_VALUES = %w[A 2 3 4 5 6 7 8 9 T J Q K].freeze # size => 13
  STRAIGHT_VALUES = %w[A 2 3 4 5 6 7 8 9 T J Q K A].freeze # size => 14
  VALUES = %w[2 3 4 5 6 7 8 9 T J Q K A].freeze # size => 13
  COMBINATIONS = %w[royal_flush? straight_flush? four_of_a_kind?
                  full_house? flush? straight? three_of_a_kind?
                  two_pairs? pair? highcard?].freeze # size => 10

  def initialize(hand)
    self.cards = hand
    self.arr_highest_cards = []
  end

  def compare_with(other)
    determine_combination_index!
    other.determine_combination_index!

    return 'Win' if combination_index < other.combination_index
    return 'Loss' if combination_index > other.combination_index

    if combination_index == other.combination_index
      arr_highest_cards.size.times do |i|
        return 'Win' if arr_highest_cards[i] > other.arr_highest_cards[i]
        return 'Loss' if arr_highest_cards[i] < other.arr_highest_cards[i]
      end
      'Tie'
    end
  end

  def royal_flush?
    return false unless five_cards_same_suit? && five_cards_different_value?

    hand_contains_values?(ROYAL_FLUSH_VALUES)
  end

  def straight_flush?
    return false unless five_cards_same_suit? && five_cards_different_value?

    0.upto(8).each do |i| # 8
      return true if hand_contains_values?(STRAIGHT_FLUSH_VALUES[i..(4+i)])
    end
    false
  end

  def four_of_a_kind?
    return false unless five_cards_two_values?

    add_indices_of_highest_cards_if_their_count_eql(4)
    return false if arr_highest_cards.empty?

    add_indices_of_highest_cards_without_combination_if_their_count_eql(1) # impossible option in poker
    true
  end

  def full_house?
    return false unless five_cards_two_values?

    arr_values_cards_of_hand.uniq.each do |value|
      if arr_values_cards_of_hand.count(value) == 3
        arr_highest_cards[0] = VALUES.index(value)
      else
        arr_highest_cards[1] = VALUES.index(value)
      end
    end
    true
  end

  def flush?
    return false unless five_cards_same_suit?

    arr_values_cards_of_hand.each { |value| arr_highest_cards << VALUES.index(value) }
    arr_highest_cards.sort_by_desc!
    true
  end

  def straight?
    return false unless five_cards_different_value?

    0.upto(9).each do |i| # 9
      return true if hand_contains_values?(STRAIGHT_VALUES[i..(4+i)])
    end
    false
  end

  def three_of_a_kind?
    return false unless five_cards_three_values?

    add_indices_of_highest_cards_if_their_count_eql(3)
    return false if arr_highest_cards.empty?

    add_indices_of_highest_cards_without_combination_if_their_count_eql(1) # impossible option in poker
    true
  end

  def two_pairs?
    return false unless five_cards_three_values?

    add_indices_of_highest_cards_if_their_count_eql(2)
    arr_highest_cards.sort_by_desc!
    add_indices_of_highest_cards_without_combination_if_their_count_eql(1)
    true
  end

  def pair?
    return false unless five_cards_four_values?

    add_indices_of_highest_cards_if_their_count_eql(2)
    add_indices_of_highest_cards_without_combination_if_their_count_eql(1)
    true
  end

  def highcard?
    add_indices_of_highest_cards_if_their_count_eql(1)
    arr_highest_cards.sort_by_desc!
    true
  end

  protected

  def determine_combination_index!
    COMBINATIONS.each_with_index do |method, i|
      return self.combination_index = i if send(method)
    end
  end

  private

  def add_indices_of_highest_cards_if_their_count_eql(count)
    arr_values_cards_of_hand.uniq.each do |value|
      arr_values_cards_of_hand.count(value) == count ? arr_highest_cards << VALUES.index(value) : next
    end
  end

  def add_indices_of_highest_cards_without_combination_if_their_count_eql(count)
    arr = []
    arr_values_cards_of_hand.uniq.each do |value|
      arr_values_cards_of_hand.count(value) == count ? arr << VALUES.index(value) : next
    end
    self.arr_highest_cards += arr.sort_by_desc! unless arr.empty?
  end

  def arr_suits_cards_of_hand
    cards.split.map { |x| x[1] }
  end

  def arr_values_cards_of_hand
    cards.split.map { |x| x[0] }
  end

  def five_cards_same_suit?
    arr_suits_cards_of_hand.uniq.size == 1
  end

  def five_cards_different_value?
    arr_values_cards_of_hand.uniq.size == 5
  end

  # it`s Four of a kind || Full house
  def five_cards_two_values?
    arr_values_cards_of_hand.uniq.size == 2
  end

  # it`s Three of a kind || Two pairs
  def five_cards_three_values?
    arr_values_cards_of_hand.uniq.size == 3
  end

  # it`s Pair
  def five_cards_four_values?
    arr_values_cards_of_hand.uniq.size == 4
  end

  def hand_contains_values?(values)
    if arr_values_cards_of_hand.select { |x| x =~ /#{values}/ }.size == 5
      arr_highest_cards << VALUES.index(values[4])
      true
    else
      false
    end
  end
end
# -----------------------------------------------------------------

# ---------------------Better Solution-----------------------------
class PokerHand
  attr_reader :rank

  def initialize(hand)
    hand = hand.split

    # get card values
    values = hand.map { |card| '__23456789TJQKA'.index(card[0]) } .sort.reverse

    # check if same suit
    same_suit = hand.map { |card| card[1] } .uniq.size == 1

    # check if straight
    straight = values.each_cons(2).all? { |a, b| a - b == 1 }

    # check n of a kind
    kinds = Hash.new([])
    values.uniq.each { |value|
      how_many = values.count(value)
      kinds[how_many] += [value]
    }

    # calculate rank
    if same_suit && straight             # royal/straight flush
      @rank = [ 8, values ]
    elsif kinds[4].any?                  # four of a kind
      @rank = [ 7, kinds[4], kinds[1] ]
    elsif kinds[3].any? && kinds[2].any? # full house
      @rank = [ 6, kinds[3], kinds[2] ]
    elsif same_suit                      # flush
      @rank = [ 5, values ]
    elsif straight                       # straight
      @rank = [ 4, values ]
    elsif kinds[3].any?                  # three of a kind
      @rank = [ 3, kinds[3], kinds[1] ]
    elsif kinds[2].size == 2             # two pairs
      @rank = [ 2, kinds[2], kinds[1] ]
    elsif kinds[2].size == 1             # one pair
      @rank = [ 1, kinds[2], kinds[1] ]
    else                                 # high card
      @rank = [ 0, values ]
    end
  end

  def compare_with(other)
    ["Tie", "Win", "Loss"][@rank <=> other.rank]
  end

end
# -----------------------------------------------------------------

# ----------------------Another Solution---------------------------
class Card
  attr_reader :suit

  def initialize(str)
    @value = str[0]
    @suit  = str[1]
  end

  def <=> (other)
    value <=> other.value
  end

  def value
    case @value
    when "T"
      10
    when "J"
      11
    when "Q"
      12
    when "K"
      13
    when "A"
      14
    else
      Integer(@value)
    end
  end
end

class Hand
  include Comparable

  attr_reader :cards

  def initialize(cards)
    @cards = cards
  end

  def <=>(other)
    if (rank <=> other.rank).zero?
      total_value <=> other.total_value
    else
      rank <=> other.rank
    end
  end

  def total_value
    cards.sum(&:value)
  end
end

class RoyalFlush < Hand
  def match?
    cards.map(&:suit).uniq.count == 1 &&
      cards.map(&:value).sort == [10, 11, 12, 13, 14]
  end

  def rank
    9000
  end
end

class StraightFlush < Hand
  def match?
    cards.map(&:suit).uniq.count == 1 &&
      cards.each_cons(2).all? { |a, b| b.value - a.value == 1 }
  end

  def rank
    8000
  end
end

class FourOfAKind < Hand
  def match?
    cards.group_by(&:value).any? { |_, cards| cards.count == 4 }
  end

  def rank
    7000
  end
end

class FullHouse < Hand
  def match?
    cards.group_by(&:value).any? { |_, cards| cards.count == 3 } &&
      cards.group_by(&:value).any? { |_, cards| cards.count == 2 }
  end

  def rank
    6000
  end
end

class Flush < Hand
  def match?
    cards.map(&:suit).uniq.count == 1
  end

  def rank
    5000
  end
end

class Straight < Hand
  def match?
    cards.each_cons(2).all? { |a, b| b.value - a.value == 1 }
  end

  def rank
    4000
  end
end

class ThreeOfAKind < Hand
  def match?
    cards.group_by(&:value).any? { |_, cards| cards.count == 3 }
  end

  def total_value
    threes_score, _ = cards
      .group_by(&:value)
      .find { |_, cards| cards.count == 3 }

    threes_score + cards.sum(&:value)
  end

  def rank
    3000
  end
end

class TwoPair < Hand
  def match?
    cards
      .group_by(&:value)
      .values
      .map(&:count)
      .select { |v| v == 2 }
      .count == 2
  end

  def total_value
    pairs_score = cards
      .group_by(&:value)
      .select { |_, cards| cards.count == 2 }
      .keys
      .sum

    pairs_score + cards.sum(&:value)
  end

  def rank
    2000
  end
end

class Pair < Hand
  def match?
    cards
      .group_by(&:value)
      .any? { |value, cards| cards.count == 2 }
  end

  def total_value
    pair_score, _ = cards
      .group_by(&:value)
      .find { |_, cards| cards.count == 2 }

    (pair_score * 10) + cards.sum(&:value)
  end

  def rank
    1000
  end
end

class Highcard < Hand
  def match?
    true
  end

  def <=>(other)
    return -1 if other.rank > rank

    our_cards = cards.reverse.map(&:value)
    their_cards = other.cards.reverse.map(&:value)

    our_card_max = our_cards
      .drop_while { |ours| their_cards.include?(ours) }
      .max

    their_card_max = their_cards
      .drop_while { |theirs| our_cards.include?(theirs) }
      .max

    our_card_max <=> their_card_max
  end

  def rank
    0
  end
end

class PokerHand
  HANDS_RANKED = [
    RoyalFlush,
    StraightFlush,
    FourOfAKind,
    FullHouse,
    Flush,
    Straight,
    ThreeOfAKind,
    TwoPair,
    Pair,
    Highcard
  ]

  def initialize(raw_hand)
    @raw_hand = raw_hand
  end

  def cards
    @cards ||= @raw_hand.split.map { |c| Card.new(c) }.sort
  end

  def hand
    @hand ||= HANDS_RANKED.each do |klass|
      hand = klass.new(cards)
      break hand if hand.match?
    end
  end

  def compare_with(other)
    return "Tie" if other == @raw_hand

    case hand <=> other.hand
    when 1
      "Win"
    when 0
      "Tie"
    when -1
      "Loss"
    end
  end
end
# -----------------------------------------------------------------

# ----------------------Another Solution--------------------------
class HandValue
  VALUES = [:highcard, :pair, :two_pair, :three_kind, 
          :straight, :flush, :full_house, :four_kind, 
          :straight_flush, :royal_flush]
  attr_reader :name, :high_cards, :compare_first

  def initialize(name, high_cards, compare_first = nil)
    @name = name
    @high_cards = high_cards
    @compare_first = compare_first
  end

  def rank
    VALUES.index(@name)
  end
  
  def to_s
    "#{@name} with high cards: #{@high_cards}"
  end
end

class PokerHand
  ACE = 14
  ROYAL_CARDS = {"T" => 10, "J" => 11, "Q" => 12, "K" => 13, "A" => ACE}
  
  def initialize(hand)
    def card_value_to_i(card_val) 
      (ROYAL_CARDS[card_val] || card_val).to_i
    end
    @cards = hand.split
    @values = @cards.map { |card| card_value_to_i(card[0]) }
    @suits = @cards.map { |card| card[1] }.uniq
  end
      
  def compare_with(other)
    hand_value = self.best_hand_value
    other_hand = other.best_hand_value

    if hand_value.rank > other_hand.rank
      "Win"
    elsif hand_value.rank < other_hand.rank
      "Loss"
    elsif hand_value.compare_first != nil && hand_value.compare_first > other_hand.compare_first
      "Win"
    elsif hand_value.compare_first != nil && hand_value.compare_first < other_hand.compare_first
      "Loss"
    else
      high_card_victory = high_card_wins?(hand_value.high_cards, other_hand.high_cards)
      if high_card_victory == nil
        return "Tie"
      end
      high_card_victory ? "Win" : "Loss"
    end
  end

  def high_card_wins?(high_cards, other_high_cards)
    for i in 0...high_cards.size
      if high_cards[i] > other_high_cards[i]
        return true
      elsif high_cards[i] < other_high_cards[i]
        return false
      end
    end
    return nil
  end

  def best_hand_value()
    values_ordered = @values.sort.uniq
    values_counted = @values.each_with_object(Hash.new(0)) { |v, h| h[v] += 1 }
                            .select { |k,v| v > 1 }
    is_straight = values_ordered.size == 5 && values_ordered.last == values_ordered.first + 4
    high_cards = values_ordered.reverse
    compare_first = nil
    hand_name = if  @suits.size == 1 && is_straight &&  high_cards.first == ACE
                  :royal_flush
                elsif @suits.size == 1 && is_straight
                  :straight_flush
                elsif values_counted.values.include?(4)
                  compare_first = values_counted.key(4)
                  high_cards.delete(compare_first)
                  :four_kind
                elsif values_counted.size == 2 && values_counted.key(3) && values_counted.key(2)
                  compare_first = values_counted.key(3)
                  :full_house
                elsif @suits.size == 1
                  :flush
                elsif is_straight
                  :straight
                elsif values_counted.values.include?(3)
                  compare_first = values_counted.key(3)
                  high_cards.delete(compare_first)
                  :three_kind
                elsif values_counted.values.include?(2) && values_counted.size == 2
                  compare_first = values_counted.keys.max
                  values_counted.each { |v| high_cards.delete(v) }
                  :two_pair
                elsif values_counted.values.include?(2)
                  compare_first = values_counted.key(2)
                  high_cards.delete(compare_first)
                  :pair
                else
                  :highcard
                end
    HandValue.new(hand_name, high_cards, compare_first)
  end

end
# -----------------------------------------------------------------

# ----------------------Another Solution---------------------------
class PokerHand
  VALUES = [
    :high_card, :pair, :two_pair, :three_of_a_kind, :straight, :flush, 
    :full_house, :four_of_a_kind, :straight_flush, :royal_flush
  ]
  CARDS = %w(2 3 4 5 6 7 8 9 T J Q K A)

  def initialize(hand)
    @cards = hand.split
  end
      
  def compare_with(other)
    case self.numeric_value <=> other.numeric_value
    when 1 then 'Win'
    when -1 then 'Loss'
    when 0 then 'Tie'
    end
  end
  
  def value
    card_values = @cards.map{|c| c[0]}
    card_suits = @cards.map{|c| c[1]}

    # values are grouped and ordered by same face value then card value, so 
    # "AH AC 5H 6H AS" => [['A', 'A', 'A'], ['6'], ['5']]
    values = card_values
      .group_by(&:itself)
      .values
      .sort_by{|v| [v.length, CARDS.index(v.first)] }
      .reverse
    
    sorted_values = values.map(&:first)
    is_flush = card_suits.uniq.length == 1
    is_straight = values[0].length == 1 && sorted_values == CARDS[CARDS.index(values[-1].first)..CARDS.index(values[0].first)].reverse
    
    type_of_hand = if is_flush && sorted_values == %w(A K Q J T)
      :royal_flush
    elsif is_flush && is_straight
      :straight_flush
    elsif values[0].length == 4
      :four_of_a_kind
    elsif values[0].length == 3 && values[1].length == 2
      :full_house
    elsif is_flush
      :flush
    elsif is_straight
      :straight
    elsif values[0].length == 3
      :three_of_a_kind
    elsif values[0].length == 2 && values[1].length == 2
      :two_pair
    elsif values[0].length == 2
      :pair
    else
      :high_card
    end
  
    [type_of_hand] + sorted_values
  end
      
  def numeric_value
    value.map.with_index do |v, i|
      i == 0 ? VALUES.index(v) : CARDS.index(v)
    end
  end
  
  private
  
  def sort_card_values(values)
    values.sort_by{|v| CARDS.index(v) || raise("Don't know about card #{v.inspect}") }
  end
end  
# -----------------------------------------------------------------

# ----------------------Another Solution---------------------------
class PokerHand
  
  def initialize(hand)
    @handRank = hand_rank(hand)
  end
  attr_reader :handRank
      
  def compare_with(other)
    ["Tie","Loss","Win"][@handRank <=> other.handRank]
  end
  
  def hand_rank(hand)
    cards,suits = normalize(hand)
    
    handTypes = [:StraightFlush,:FourOfAKind,:FullHouse,:Flush,:Straight,:ThreeOfAKind,:TwoPair,:Pair,:HighCard]
    myType = nil
    
    isFlush = suits.uniq.size == 1
    isStraight = (cards.max-cards.min==4) && (cards.uniq.size==5)
    
    myType = :Flush if isFlush
    myType = :Straight if isStraight
    myType = :StraightFlush if isStraight && isFlush
    
    sortRank = cards.group_by{|x| x }.map{|x,cards| 
      myType = :FourOfAKind if cards.size == 4
      myType = :FullHouse if (cards.size == 3 && myType == :Pair) || (cards.size == 2 && myType == :ThreeOfAKind)
      myType ||= :ThreeOfAKind if cards.size == 3
      myType = :TwoPair if cards.size == 2 && myType == :Pair
      myType ||= :Pair if cards.size == 2 
      [cards.size,x] 
    }.sort.reverse.map{|size,card| -card }
    myType ||= :HighCard
    
    return [handTypes.index(myType),*sortRank]
  end
  
  def normalize(hand) #convert hand into a tuple of card values and suits
    hand = hand.split

    [hand.map{|s| s[0].tr('TJQKA','ABCDE').to_i(16) },
     hand.map{|s| s[1].tr("SHCD","4321").to_i } ]
  end
  
end
# -----------------------------------------------------------------

# ----------------------Another Solution---------------------------
class PokerHand
  RANKS = %w(highcard pair two_pairs three_of_kind straight flush full_house four_of_kind straight_flush royal_flush)
  CARDS = %w(2 3 4 5 6 7 8 9 T J Q K A)
  
  attr_reader :rank, :trigger, :values
  def initialize(hand)
    cards = hand.split(' ')
    @values = cards.map{|card| CARDS.index(card[0])}.sort
    @suits = cards.map{|card| card[1]}
    @repeats = @values.reduce (Hash.new(0)) {|counts, el| counts[el]+=1; counts}
    @rank, @trigger = hand_rank
  end
  
  def straight?
    (@values[0]...@values[0]+5).to_a == @values
  end
  
  def flush?
    @suits.uniq.size == 1
  end
  
  def hand_rank
    rank, trigger = if flush? && @values == [8, 9, 10, 11, 12]
      ['royal_flush', 12]
    elsif flush? && straight?
      ['straight_flush', @values[-1]]
    elsif @repeats.any?{|k,v| v == 4}
      ['four_of_kind', @repeats.key(4)]
    elsif @repeats.any?{|k,v| v == 3} && @repeats.any?{|k,v| v == 2}
      ['full_house', @repeats.key(3)]
    elsif flush?
      ['flush', @values[-1]]
    elsif straight?
      ['straight', @values[-1]]
    elsif @repeats.any?{|k,v| v == 3}
      ['three_of_kind', @repeats.key(3)]
    elsif @repeats.select{|k,v| v == 2}.size == 2
      ['two_pairs', @repeats.map{|k,v| k if v == 2}.compact.max]
    elsif @repeats.any?{|k,v| v == 2}
      ['pair', @repeats.key(2)]
    else
      ['highcard', @values[-1]]
    end
    
    return [RANKS.index(rank), trigger]
  end
      
  def compare_with(other)
    return 'Win' if self.rank > other.rank
    return 'Tie' if self.rank == other.rank && self.values == other.values
    return 'Loss' if self.rank == other.rank && self.trigger < other.trigger
    return 'Win' if self.rank == other.rank && self.trigger > other.trigger
    
    difference = self.values - other.values | other.values - self.values
    return 'Win' if self.rank == other.rank && self.values.include?(difference.max)
    return 'Loss'
  end
end
# -----------------------------------------------------------------

# ----------------------Another Solution---------------------------
ORDER = [2,3,4,5,6,7,8,9,'T','J','Q','K','A'].map(&:to_s)
RANK = [:single, :one_pair, :two_pair, :three, :straight, :flush, :full_house, :four, :straight_flush, :royale_flush]
class PokerHand

  def initialize(rawHand)
    @rawHand = rawHand
  end

  def compare_with(other)
    return ["Tie", "Win", "Loss"][fullRank <=> other.fullRank]
  end

  def fullHand
    @rawHand.split(' ').map {|x| x.split('')}
  end

  def values
    fullHand.map(&:first).map {|e| ORDER.index(e)}.sort
  end

  def valueOf card
    ORDER.index card
  end

  def flush?
    fullHand.map(&:last).uniq.size == 1
  end

  def straigth?
    values.each_cons(2).all? {|x,y| x + 1 == y}
  end

  def summary
    fullHand.group_by(&:first).to_a.map { |e, a| [a.size, e] }.group_by(&:first).transform_values {|v| v.map {|u| valueOf(u.last)}}
  end

  def count
    summary.keys
  end

  def rank
    mx = values.max
    return flush? ? values.include?(12) ? [:royale_flush,0] : [:straight_flush, mx] : [:straight, mx] if straigth?
    return [:four, summary[4][0]] if count.include? 4
    return [:full_house, summary[3][0]] if count.sort == [2,3]
    return [:flush, mx] if flush?
    return [:three, summary[3][0]] if count.include? 3
    return summary[2].size == 2 ? [:two_pair, summary[2].max] : [:one_pair, summary[2][0]] if count.include? 2
    [:single, mx]
  end

  def fullRank
    [RANK.index(rank.first), rank.last, values.sort_by{|e| [-values.count(e),-e ]}]
  end
end
# -----------------------------------------------------------------

# ----------------------Another Solution---------------------------
class Card
  VALUES = %w(2 3 4 5 6 7 8 9 T J Q K A).each_with_index.with_object({}) {|(v, i), h| h[v] = i}

  attr_reader :value, :colour
  def initialize name
    @value = VALUES[name[0]]
    @colour = name[1]
  end

  def <=> other
    value <=> other.value
  end
end

class PokerHand

  attr_reader :cards, :rank
  def initialize hand
    @cards = hand.split.map{|c| Card.new(c)}.sort_by{|c| -c.value}
    @cards_by_value = @cards.group_by(&:value)
    .map{|value, cards| {value: value, count: cards.size, cards: cards}}
    .sort_by{|group| [-group[:count], -group[:value]]}
  end

  def n_of_a_kind *nums
    if ((packs = nums.zip(@cards_by_value)).all?{|n, g| g[:count] == n})
      packs.map{|n, g| g[:value]} + cards
    end
  end

  def straight
    if (cards[1..-1].each_with_index.all?{|c, i| c.value + 1 == cards[i].value})
      cards
    end
  end

  def flush
    cards if (cards.all?{|c| c.colour == cards.first.colour})
  end

  def rank
    return @value if (@value)
    @rank_procs ||= [
      Proc.new{flush && straight},
      Proc.new{n_of_a_kind(4)},
      Proc.new{n_of_a_kind(3, 2)},
      Proc.new{flush},
      Proc.new{straight},
      Proc.new{n_of_a_kind(3)},
      Proc.new{n_of_a_kind(2, 2)},
      Proc.new{n_of_a_kind(2)},
      Proc.new{cards},
      ]
    @rank_procs.each_with_index do |rank_proc, i|
      rank_cards = rank_proc.call
      return @value = [@rank_procs.size - i] + rank_cards if (rank_cards)
    end
    throw Exception.new("Error! Unable to rank the following hand: #{to_s}.")
  end

  def compare_with other
    {-1 => 'Loss', 0 => 'Tie', 1 => 'Win'}[rank <=> other.rank] || "Unnexpected output: #{rank <=> other.rank}"
  end
end
# -----------------------------------------------------------------

# ----------------------Another Solution---------------------------
class PokerHand

  attr_accessor :cards

  class Card
    attr_accessor :pip, :suit, :rank

    def initialize(s)
      @pip = s[0]
      @suit = s[1]
      @rank = '23456789TJQKA'.index(@pip)
    end

    def inspect
      @pip + @suit
    end

  end

  def initialize(hand)
    @cards = hand.split(' ').map {|c| Card.new(c)}.sort_by! {|c| c.rank}.reverse
  end

  def inspect
    @cards.each {:to_s}.join(' ')
  end

  def pairs
    @cards.combination(2).select {|a, b| a.pip == b.pip}
  end

  def triplet
    @cards.combination(3).select {|a, b, c| (a.pip == b.pip) && (b.pip == c.pip)}
  end

  def flush?
    @cards.all? {|a| a.suit == @cards.first.suit}
  end

  def straight?
    Regexp.new(@cards.map {|c| c.pip}.join).match?('AKQJT98765432')
  end

  def score
    score = 0
    score += 80 if self.straight?
    score += 100 if self.flush?
    score = 20 + pairs[0][0].rank if pairs.size == 1 # one pair
    score = 40 + pairs[0][0].rank + pairs[1][0].rank if pairs.size == 2 # two pair
    score = 60 + triplet[0][0].rank if pairs.size == 3 # three of a kind
    score = 120 + triplet.first[0].rank if pairs.size == 4 # full house
    score = 140 + pairs[0][0].rank if pairs.size == 6 # four of a kind
    return score
  end


  def tie_breaker(other)
    (0..4).each do |i|
      return @cards[i].rank <=> other.cards[i].rank if @cards[i].pip != other.cards[i].pip
    end
    return 0
  end

  def compare_with(other)
    if self.score == other.score
      return ['Tie', 'Win', 'Loss'][tie_breaker(other)]
    else
      return self.score > other.score ? "Win" : "Loss"
    end
  end
end
# -----------------------------------------------------------------
