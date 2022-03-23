//Rest and Spread Oprerator
//Introduced in ES6

//Used in collection sto help with multiple values.
// function sum(numbers){
//     let result=0;
//     for(let i=0;i<numbers.length;i++){
//         result += numbers[i];
//     }
//     console.log(result);
// }


//Using rest operator
//convert individual values into an array.
function sum(...numbers){
    let result= 0;
    for(let i=0;i <numbers.length;i++){
        result += numbers[i];
    }
    console.log(result);
}

sum(2,3);
sum(2,3,4);
sum(2,3,4,5);