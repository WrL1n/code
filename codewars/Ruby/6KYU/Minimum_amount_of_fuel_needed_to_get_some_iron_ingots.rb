=begin
But first, Steve needs to melt some iron ores in the furnace to get the main building blocks of rails -- iron ingots. Alt text

Each iron ingot takes 11 seconds* to produce. Steve needs a lot of them, and he has the following fuel options to add into the furnace:

Buckets of lava, each lasts 800 seconds* Alt text
Blaze rod, each lasts 120 seconds Alt text
Coals, each lasts 80 seconds Alt text
Blocks of Wood, each lasts 15 seconds Alt text
Sticks, each lasts 1 second* Alt text
In Ruby: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a hash of the form {:lava => 2, :blaze_rod => 1, :coal => 1, :wood => 0, :stick => 0}

In JavaScript: Write a function calcFuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return an object of the form {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0}

*fictional values

To all the Minecraft players out there: feel free to expand this series or let me know if you have any ideas related to Minecraft that can be turned into codewars puzzles. Some ideas I have that might potentially be turned into katas:

distance traveled in real world vs. in Nether
shortest path problems related to mining diamonds/gold/goodies that appears in different levels under ground
growth of animal population from breeding
redstone stuff?!
If you do end up expanding this series, please send me a link of your kata so I can check it out and include a link to your kata here :-)
=end

# My Solution
def calc_fuel(n)
  arr = { lava: 800, blaze_rod: 120, coal: 80, wood: 15, stick: 1 }
  res = {}
  x = n * 11
  arr.each_key do |type_fuel|
    res.merge!(type_fuel => 0) unless x <= arr[type_fuel]

    res.merge!(type_fuel => x / arr[type_fuel])
    x %= arr[type_fuel]
  end
  res
end

# Better Solution
FUEL_TYPES = { lava: 800, blaze_rod: 120, coal: 80, wood: 15, stick: 1 }

def calc_fuel(ingots)
  ingot_seconds = ingots * 11

  FUEL_TYPES.each_with_object({}) { |(fuel_type, fuel_seconds), memo|
    memo[fuel_type], ingot_seconds = ingot_seconds.divmod(fuel_seconds)
  }
end

# Another Solution
def calc_fuel(n) 
  n *= 11
  { lava: 800, blaze_rod: 120, coal: 80, wood: 15, stick: 1 }.map do |fuel, seconds|
    amount = n / seconds
    n %= seconds
    [fuel, amount]
  end.to_h
end
