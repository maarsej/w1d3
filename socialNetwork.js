
var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};
// Who follows the most people
var longest = 0;
var output1 = {};
for (var user in data){
   if (data[user].follows.length > longest){
    longest = data[user].follows.length;
    output1['Most follows'] = data[user].name;

    //console.log(output1);
  }
}
console.log(output1);

//Identify who has the most followers

var mostFollowers = {};
for (var user in data){
  //console.log(user);
  for (i = 0; i<data[user].follows.length; i++){
    for (var followers in data){
      //console.log(followees);
      //console.log(data[followers].follows[i]);
      if (user == data[followers].follows[i]){
        if (user in mostFollowers){
          mostFollowers[user].follows += 1;

        }
        else {
          mostFollowers[user] = { follows: 1 };
          //console.log(user);
        }
      }
    }
  }
}
// console.log(mostFollows);
var most = 0;
var output2 = {};
for (var user in mostFollowers){
  //console.log(mostFollows[user]);
  if (mostFollowers[user].follows > most){
    most = mostFollowers[user].follows;
    output2['Most Followers'] = data[user].name;
  }
}

console.log(output2);





