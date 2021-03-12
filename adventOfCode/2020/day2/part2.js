/*
--- Part Two ---
While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.

The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.

Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

Given the same example list from above:

1-3 a: abcde is valid: position 1 contains a and position 3 does not.
1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
How many passwords are valid according to the new interpretation of the policies?
*/

// Data transform
arrOfData= document.querySelector('pre')
  .outerText
  .split('\n')
  .slice(0,-1)
  .map(it =>it.split(' '))
  .map((it)=>{
    return {
            ['firstIndex']: +it[0].split('-')[0],
            ['secondIndex']: +it[0].split('-')[1],
            ['char']: it[1][0],
            ['string']: it[2]
            }
  })

// Code
arrOfData.filter((it)=> {
  if (it.string[it.firstIndex - 1] === it.char
      && it.string[it.secondIndex - 1] === it.char) return false
  return it.string[it.firstIndex - 1] === it.char
      || it.string[it.secondIndex - 1] === it.char
})
