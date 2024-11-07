
function createArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}


function findMinMax(array) {
    let maxEven = Number.NEGATIVE_INFINITY;
    let minEven = Number.POSITIVE_INFINITY;
    let maxOdd = Number.NEGATIVE_INFINITY;
    let minOdd = Number.POSITIVE_INFINITY;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            maxEven = Math.max(maxEven, array[i]);
            minEven = Math.min(minEven, array[i]);
        } else { 
            maxOdd = Math.max(maxOdd, array[i]);
            minOdd = Math.min(minOdd, array[i]);
        }
    }

    return {
        maxEven, minEven, maxOdd, minOdd
    };
}

function selectionSortDescending(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            [array[i], array[maxIndex]] = [array[maxIndex], array[i]]; 
        }
    }
    return array;
}


function processArray() {
    const length = Number(document.getElementById("arrayLength").value);
    const resultsDiv = document.getElementById("results");

    if (isNaN(length) || length <= 0) {
        resultsDiv.innerHTML = "Будь ласка, введіть коректну кількість елементів масиву.";
        return;
    }


    const array = createArray(length);
    resultsDiv.innerHTML = `<p>Початковий масив: [${array.join(", ")}]</p>`;


    const minMaxValues = findMinMax(array);
    resultsDiv.innerHTML += `<p>Максимальне значення (парні індекси): ${minMaxValues.maxEven}</p>`;
    resultsDiv.innerHTML += `<p>Мінімальне значення (парні індекси): ${minMaxValues.minEven}</p>`;
    resultsDiv.innerHTML += `<p>Максимальне значення (непарні індекси): ${minMaxValues.maxOdd}</p>`;
    resultsDiv.innerHTML += `<p>Мінімальне значення (непарні індекси): ${minMaxValues.minOdd}</p>`;


    const sortedArray = selectionSortDescending([...array]);
    resultsDiv.innerHTML += `<p>Відсортований масив (зменшення): [${sortedArray.join(", ")}]</p>`;
}