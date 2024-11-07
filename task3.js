function filterArray(numbers, value) {
    const filteredNumbers = [];

    for (let number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    }
    
    return filteredNumbers;
}

function filterAndDisplayArray() {
    const numbersInput = document.getElementById("numbers").value;
    const valueInput = Number(document.getElementById("value").value);
    const resultElement = document.getElementById("result");

    const numbersArray = numbersInput.split(',').map(Number);

    const resultArray = filterArray(numbersArray, valueInput);

    resultElement.textContent = `Результат: [${resultArray.join(", ")}]`;
}