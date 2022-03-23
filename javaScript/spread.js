//Used in collection to help with multiple values
//Using spread operator
//Convert array into individual value

const indiansCars=["Tata","Mahindra","Maruti"];
const usCars=["Tesla","ford","Ferrari"];


//create another array with from both arrays.
const result = [indiansCars+usCars];
console.log(result);
//spread operator
const car =[...indiansCars,...usCars];
console.log(car);