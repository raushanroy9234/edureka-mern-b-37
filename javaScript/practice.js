var ourDog = {
    "name" : "raushan",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["Everythings"]
};

ourDog.name = "Happy raushan";
console.log(ourDog.name);
ourDog['name'] = "Happy issac";
console.log(ourDog.name);
delete ourDog.friends;
console.log(ourDog.friends);
ourDog.friends = "bhadauria";
console.log(ourDog.friends);


