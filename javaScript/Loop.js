//Loop
//1.Do somethings i Loop
//2 Repeat similar operation


//1.while loop
//steps
       //1 initialization
       //2. condition
       //3.increment or decrement
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

//reverse a string
//my name is raushan
const str = "my name is raushan";
const index = str.length-1;
let str1 = "" ;
for(let i=index;i>=0;i--){
    str1 = str1.concat(str[i]);
}
console.log(str1);
