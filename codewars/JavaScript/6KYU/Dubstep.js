/*
Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
Input:
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
Output:
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
Examples:
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
*/

// My Solution
const songDecoder = song => song.split('WUB').filter(it=>it).join(' ')

// Better Solution
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

// Another Solution
function songDecoder(song){
  var str = '';
  for(var i=0;i<song.length;i++){
    if((song[i] == 'W' && song[i+1] == 'U' && song[i+2] == 'B')
    || (song[i-1] == 'W' && song[i] == 'U' && song[i+1] == 'B')
    || (song[i-2] == 'W' && song[i-1] == 'U' && song[i] == 'B'))
      str += str[str.length-1] !== ' ' ? ' ' : '';
    else
      str += song[i];
  }
  return str.trim();
}
