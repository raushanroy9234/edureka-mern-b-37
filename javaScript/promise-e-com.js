
function validateCard(card){
    const newPromise = new Promise((resolve, reject)=>{
        if(card){
           setTimeout(()=>{
            // api calls.   
            resolve("Card is valid", {})}, 2000);
        }else{
            reject("Card is invalid");
        }
    });
    return newPromise;
}

function getCardDetails(card){
    validateCard(card)
        .then(
            (msg)=>{
                console.log(msg);
                deductAmount();
            }, // called when promise is resolved.
            (err)=>{
                console.log(err)
            }, // called when prommise is rejected.
            ()=>{console.log("completed");} // called when promise is completed.
        )
}

function deductAmount(amount){
    console.log("Amount is deducted");
}

getCardDetails("2016 7834 6721");

//function chaining
function getCardDetails(card){
    validateCard("dummy").then(
        
    )
}