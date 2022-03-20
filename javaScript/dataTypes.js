//Data Types in JS
//1. Number
//2. String
//3.Object
//4.function
//5.undefined

//undefined means a variable with no values
let x;
console.log(typeof x)//undefined


x = 10;
//operator to find datatype of an identifier
//use typeof operator
console.log(typeof x);//number

x= "name";
console.log(typeof x);//string
x = {id:1, name:"raushan roy", dept:"finance"}
console.log(typeof x);

x = function print(){
    console.log("This is a function");
}
console.log(typeof x);


x = new Date();
console.log(x);
console.log(typeof x);//typeof object
//operator to find instance of object
console.log(x instanceof Date);true

x = null;//defined with no data
console.log(typeof x);//object

 