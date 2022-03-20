
//Array =>Collections of Data
//Array stores data based on indexes.
//index start at 0.

const arrayOfNumbers = [10,20,30,40,50,60];



//how to access one value from array
console.log(arrayOfNumbers[1]+arrayOfNumbers[3]);

// 3.How to add a value to array
arrayOfNumbers.push(30);
console.log(arrayOfNumbers);

// 4.How to remove a value from array.
arrayOfNumbers.pop();
console.log(arrayOfNumbers);

// how to insert an element at any particular index.
arrayOfNumbers.splice(2,0, 100);
console.log(arrayOfNumbers);

//how to delete an elemet at any particular
arrayOfNumbers.splice(2,1);
console.log(arrayOfNumbers);


//splice(index,no of element,delete)

//how to find length of array
console.log(arrayOfNumbers.length);

//how to get part of array
const subArray = arrayOfNumbers.slice(1.4);
console.log(subArray);

//how to find an element in array
//in find if the element cant be found then,it return underfined.
const result = arrayOfNumbers.find(e=> e==43)
console.log(result);
const result1 = arrayOfNumbers.findIndex(e=> e==40);
console.log(result1);

//how to find multiple elements in array based on a condition 
const numbersGreaterThan40 = arrayOfNumbers.filter(e=> e>40);
console.log(numbersGreaterThan40);

