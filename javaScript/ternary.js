
// function IsEven(val){
//     if(val % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

//ternary operator . ?,:
//<conditionalExpression>?<doIfmatch>:<doIfnotMactch>


function IsEven(val){
    const result = val%2 == 0?true:false;
    return result;
}

console.log(IsEven(6));
console.log(IsEven(101));