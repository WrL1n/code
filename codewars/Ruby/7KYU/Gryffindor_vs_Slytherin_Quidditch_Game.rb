=begin

It's the most hotly anticipated game of the school year - Gryffindor vs Slytherin! Write a function which returns the winning team.

You will be given two arrays with two values.

The first given value is the number of points scored by the team's Chasers and the second a string with a 'yes' or 'no' value if the team caught the golden snitch!

The team who catches the snitch wins their team an extra 150 points - but doesn't always win them the game.

gameWinners([150, 'yes'],[200, 'no']) //'Gryffindor wins!'
gameWinners([400, 'no'],[350, 'yes']) //'Slytherin wins!'
If the score is a tie return "It's a draw!""

** The game only ends when someone catches the golden snitch, so one array will always include 'yes' or 'no.' Points scored by Chasers can be any positive integer.

=end

# My Solution
def game_winners(gryffindor, slytherin)
  [gryffindor, slytherin].each { |x| x[0] += 150 if x[1] == 'yes' }
  if gryffindor[0] == slytherin[0]
    "It's a draw!"
  elsif gryffindor[0] > slytherin[0]
    'Gryffindor wins!'
  else
    'Slytherin wins!'
  end
end

# Better Solution
def game_winners(gryffindor, slytherin)
  case score(*gryffindor) <=> score(*slytherin)
  when  1 then 'Gryffindor wins!'
  when -1 then 'Slytherin wins!'
  else "It's a draw!"
  end
end

def score(points, snitch)
  points + (snitch == "yes" ? 150 : 0)
end

# Another Solution
def game_winners *players
  ["It's a draw!", 'Gryffindor wins!', 'Slytherin wins!'][players.map { |x, y| x + 150 * (y.size - 2) }.inject(:<=>)]
end

# Another Solution
S = {'yes' => 150, 'no' => 0}
def game_winners(g, s)
  ["It's a draw!", 'Gryffindor wins!', 'Slytherin wins!'][g.first + S[g.last] <=> s.first + S[s.last]]
end

# Another Solution
def game_winners(g, s)
  griff = g[0] + (g[1] == "yes" ? 150 : 0)
  slyth = s[0] + (s[1] == "yes" ? 150 : 0)
  return "It's a draw!" if slyth == griff
  griff > slyth ? 'Gryffindor wins!' : 'Slytherin wins!'
end
