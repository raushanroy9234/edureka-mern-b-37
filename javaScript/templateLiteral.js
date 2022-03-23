// Template Literal in js

//Allow you to embed js variables in string.
const name = "Raushan roy";
const role = "ceo";
const location = "india";
const exp = "fresher";

//my name is raushan roy.i am ceo of make my machine.i stay in noida inida. i am fresher.
const introduction = " My name is " +name+". i am "+role+" of make my machine."+" i stay in noida "+location+". i am "+exp;
console.log(introduction);

const intro = `My name is ${name} and i am ${role} of make my machine. i stay in noida ${location}. i am ${exp}`;
console.log(intro);