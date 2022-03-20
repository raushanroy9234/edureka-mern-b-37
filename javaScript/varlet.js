//declaring function in js

function testDeclaration(){
    if(true){
        var x=10;
        let y=20;
        console.log("inside if block")
        console.log(x); //10
        console.log(y); //20
    }
    console.log("outside block");
    console.log(x); //10
    console.log(y); //y is not defined
}

//declaration using var has function level scope
//declaration using let has block level scope

//excecuting function in js
testDeclaration();