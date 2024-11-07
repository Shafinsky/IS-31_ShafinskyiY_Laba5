function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();

    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

function checkMessage() {
    const message = document.getElementById("message").value;
    const resultElement = document.getElementById("result");

    const isSpam = checkForSpam(message);

    if (isSpam) {
        resultElement.textContent = "У повідомленні знайдено спам або рекламу.";
    } else {
        resultElement.textContent = "Повідомлення чисте.";
    }
}