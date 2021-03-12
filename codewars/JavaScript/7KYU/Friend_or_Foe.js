/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
*/

// My Solution
const friend = friends => friends.filter(it => it.length === 4)

// Better Solution
function friend(friends){
  return friends.filter(n => n.length === 4)
}

// Another Solution
const friend = friends => friends.filter(f => f.length == 4 && /^[a-zA-Z]+$/.test(f))
