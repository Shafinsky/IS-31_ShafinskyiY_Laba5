function orderDroids() {
    let quantity = getValidNumber("Please enter the number of droids you want to order:");
    let pricePerDroid = getValidNumber("Please enter the price per droid:");
    let message = makeTransaction(quantity, pricePerDroid);
    console.log(message);
}


function getValidNumber(promptMessage) {
    let value;
    while (true) {
        value = Number(prompt(promptMessage));
        if (!isNaN(value) && value > 0) {
            return value;
        }
        console.log("Please enter a valid positive number.");
    }
}


function makeTransaction(quantity, pricePerDroid) {
    if (typeof quantity !== 'number' || typeof pricePerDroid !== 'number') {
        return "Error: Please enter valid numerical values for quantity and price.";
    }
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}