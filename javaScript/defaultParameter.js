//Default parameter
//Total cost of food = cost of food + delivery charge+taxes.

function calculateTotalPrice(costOfFood,taxes,deliveryCharges=10){
    const result = costOfFood+deliveryCharges+taxes;
    console.log(result);
}

//general membership
calculateTotalPrice(500,50,50);

//pro membership.
calculateTotalPrice(350,40);