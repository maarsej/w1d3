var word = process.argv[2];

word = word.toLowerCase();

function countLetters(word){
  var letter = word.split('');
  var counter = {};
  for (i=0; i<letter.length; i++){
    if (letter[i] === ' '){
      continue;
    }
    else if (letter[i] in counter){
      counter[letter[i]] = counter[letter[i]] + ", " + String(i);
    }
    else {
      counter[letter[i]] = String(i);
    }
  }
  return counter;
}
console.log(countLetters(word));