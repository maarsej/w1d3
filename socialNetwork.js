
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
    follows: ["f01", "f04","f06"]
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
    for (var followers in data){
      if (data[followers].follows.includes(user)) {
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
// console.log(mostFollowers);
var most = 0;
var output2 = {};
for (var user in mostFollowers){
  // console.log(mostFollowers[user]);
  if (mostFollowers[user].follows > most){
    output2={};
    most = mostFollowers[user].follows;
    // console.log(most);
    output2['Most Followers'] = data[user].name;
  }
  else if (mostFollowers[user].follows === most && output2['Tied with'] !== undefined){
    output2['Tied with'] += " and " + data[user].name;
    //console.log(output2);
  }
  else if (mostFollowers[user].follows === most){
    output2['Tied with'] = data[user].name;
    //console.log(output2);
  }
}

console.log(output2);





