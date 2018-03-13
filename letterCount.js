var word = process.argv[2];

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
word = word.toLowerCase();

function countLetters(word){
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var letter = word.split('');
  var counter = {};
  for (i=0; i<letter.length; i++){
    if (letter[i] in counter){
      counter[letter[i]] += 1;
    }
    else {
      counter[letter[i]] = 1;
    }
  }
  return counter;
}
console.log(countLetters(word));


