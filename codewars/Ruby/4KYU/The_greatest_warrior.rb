=begin

Create a class called Warrior which calculates and keeps track of their level and skills, and ranks them as the warrior they've proven to be.

Business Rules:

A warrior starts at level 1 and can progress all the way to 100.
A warrior starts at rank "Pushover" and can progress all the way to "Greatest".
The only acceptable range of rank values is "Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest".
Warriors will compete in battles. Battles will always accept an enemy level to match against your own.
With each battle successfully finished, your warrior's experience is updated based on the enemy's level.
The experience earned from the battle is relative to what the warrior's current level is compared to the level of the enemy.
A warrior's experience starts from 100. Each time the warrior's experience increases by another 100, the warrior's level rises to the next level.
A warrior's experience is cumulative, and does not reset with each rise of level. The only exception is when the warrior reaches level 100, with which the experience stops at 10000
At every 10 levels, your warrior will reach a new rank tier. (ex. levels 1-9 falls within "Pushover" tier, levels 80-89 fall within "Champion" tier, etc.)
A warrior cannot progress beyond level 100 and rank "Greatest".
Battle Progress Rules & Calculations:

If an enemy level does not fall in the range of 1 to 100, the battle cannot happen and should return "Invalid level".
Completing a battle against an enemy with the same level as your warrior will be worth 10 experience points.
Completing a battle against an enemy who is one level lower than your warrior will be worth 5 experience points.
Completing a battle against an enemy who is two levels lower or more than your warrior will give 0 experience points.
Completing a battle against an enemy who is one level higher or more than your warrior will accelarate your experience gaining. The greater the difference between levels, the more experinece your warrior will gain. The formula is 20 * diff * diff where diff equals the difference in levels between the enemy and your warrior.
However, if your warrior is at least one rank lower than your enemy, and at least 5 levels lower, your warrior cannot fight against an enemy that strong and must instead return "You've been defeated".
Every successful battle will also return one of three responses: "Easy fight", "A good fight", "An intense fight". Return "Easy fight" if your warrior is 2 or more levels higher than your enemy's level. Return "A good fight" if your warrior is either 1 level higher or equal to your enemy's level. Return "An intense fight" if your warrior's level is lower than the enemy's level.
Logic Examples:

If a warrior level 1 fights an enemy level 1, they will receive 10 experience points.
If a warrior level 1 fights an enemy level 3, they will receive 80 experience points.
If a warrior level 5 fights an enemy level 4, they will receive 5 experience points.
If a warrior level 3 fights an enemy level 9, they will receive 720 experience points, resulting in the warrior rising up by at least 7 levels.
If a warrior level 8 fights an enemy level 13, they will receive 0 experience points and return "You've been defeated". (Remember, difference in rank & enemy level being 5 levels higher or more must be established for this.)
If a warrior level 6 fights an enemy level 2, they will receive 0 experience points.
Training Rules & Calculations:

In addition to earning experience point from battles, warriors can also gain experience points from training.
Training will accept an array of three elements (except in java where you'll get 3 separated arguments): the description, the experience points your warrior earns, and the minimum level requirement.
If the warrior's level meets the minimum level requirement, the warrior will receive the experience points from it and store the description of the training. It should end up returning that description as well.
If the warrior's level does not meet the minimum level requirement, the warrior doesn not receive the experience points and description and instead returns "Not strong enough", without any archiving of the result.
Code Examples:

bruce_lee = Warrior.new
bruce_lee.level         # => 1
bruce_lee.experience    # => 100
bruce_lee.rank          # => "Pushover"
bruce_lee.achievements  # => []
bruce_lee.training(["Defeated Chuck Norris", 9000, 1]) # => "Defeated Chuck Norris"
bruce_lee.experience    # => 9100
bruce_lee.level         # => 91
bruce_lee.rank          # => "Master"
bruce_lee.battle(90)    # => "A good fight"
bruce_lee.experience    # => 9105
bruce_lee.achievements  # => ["Defeated Chuck Norris"]

=end

# My Solution
class Warrior
  attr_writer :level, :rank
  attr_accessor :experience, :achievements

  RANKS = %w[Pushover Novice Fighter Warrior Veteran Sage Elite Conqueror Champion Master Greatest]
  MAX_EXP = 10_000

  def initialize
    self.achievements = []
    self.experience = 100
    rank
    level
  end

  def rank
    self.rank = RANKS[level / 10]
  end

  def level
    self.level = experience / 100
  end

  def battle(enemy_level)
    return 'Invalid level' unless (1..100).include? enemy_level
    return "You've been defeated" if (enemy_level / 10 != level / 10) && (enemy_level - level >= 5)

    case
    when level == enemy_level
      add_exp(10)
      'A good fight'
    when level - enemy_level == 1
      add_exp(5)
      'A good fight'
    when level - enemy_level >= 2
      'Easy fight'
    when enemy_level - level >= 1
      add_exp((enemy_level - level)**2 * 20)
      'An intense fight'
    end
  end

  def training(args)
    if level >= args[2]
      add_exp(args[1])
      achievements << args[0]
      args[0]
    else
      'Not strong enough'
    end
  end

  private

  def add_exp(count)
    @experience += count
    @experience = MAX_EXP if @experience > MAX_EXP
  end
end

# Better Solution
class Warrior
  @@ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
  
  @rank
  @experience
  @level
  @achievements
  
  attr_reader :rank, :level, :achievements
  attr_accessor :experience
  
  def initialize()
      @rank = @@ranks[0]   # Goes up every 10 levels (or every 1,000 exper).
      @experience = 100  # Caps at 10,000.
      @level = 1  # @experience / 100.   Also, caps at 100.
      @achievements = []
  end
  
  
  def self.ranks
      @@ranks
  end
  
  
  def print_stats
      puts "Rank: " +  @rank.to_s
      puts "Level: " + @level.to_s
      puts "Experience: " + @experience.to_s
      puts # more white space
  end
  
  
  def gain_exper(amount)
      @experience = [@experience + amount, 10000].min
      @level = @experience / 100
      @rank = @@ranks[level / 10]
  end
  
  
  def training(event)
      # event is an array of 3 elements: [Description, experience earned from victory, min level required]
      if (@level >= event[2])
          self.gain_exper(event[1])
          @achievements.append(event[0])
          @achievements.last
      else
          "Not strong enough"
      end
  end
  
  
  def battle(enemy_level)
      enemy_level = enemy_level.to_i
      if (enemy_level >= 1 and enemy_level <= 100)
          case enemy_level
          when @level
              self.gain_exper(10)
              "A good fight"
          when @level - 1
              self.gain_exper(5)
              "A good fight"
          when -2..(@level - 2)
              self.gain_exper(0)
              "Easy fight"
          else
              if (enemy_level >= @level + 5 and @level / 10 < enemy_level / 10)
                  "You've been defeated"
              else
                  self.gain_exper(20 * (enemy_level - @level) * (enemy_level - @level))
                  "An intense fight"
              end
          end
      else
          "Invalid level"
      end
  end
end
  

# Another Solution
class Warrior
    
  MAX_LVL        = 100
  MAX_XPS        = 10000
  RANKS          = ["", "Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
  DEF_RET_ACHIEV = "Not strong enough"
  INVALID_BATTLE = "Invalid level"
  FAILED_BATTLE  = "You've been defeated"
  STR_BATTLE     = ["A good fight", "An intense fight", "Easy fight"]
  
  
  def initialize
      @xps, @achiv = 100, []
  end
  
  def level()        (@xps/100).floor end
  def rank()         RANKS[getRank(@xps)] end
  def experience()   @xps   end
  def achievements() @achiv end
  
  def updateStatus(xp) @xps = [@xps+xp, MAX_XPS].min end
  def getRank(xps)     (xps/1000).floor+1 end
  private :updateStatus, :getRank
  
  def battle(oLvl)
      diff = oLvl - level()
      return INVALID_BATTLE if !(1 <= oLvl && oLvl <= MAX_LVL)
      return FAILED_BATTLE  if diff >= 5 && getRank(@xps) < getRank(oLvl*100)
      
      xp = diff > 0 ? 20 * diff**2 : [0, 10+5*diff].max
      updateStatus(xp)
      return STR_BATTLE[diff!=-1 ? (diff <=> 0) : 0]
  end
  
  def training(event)
      ach, xp, minLvl = *event
      return DEF_RET_ACHIEV if level() < minLvl
      
      updateStatus(xp)
      @achiv << ach
      return ach
  end
end
