// remove even/odd number from an array.

const arr1 = [1, 5, 46, 45, 89, 45, 78, 15, 65, 23]

function removeEvenvalueFromArray(anyArray) {
    let onlyOddNumbersArray = [];
    for (let i = 0; i < anyArray.length; i++) {
        if (anyArray[i] % 2 === 0) {
            onlyOddNumbersArray.push(anyArray[i]);
        }
    }
    return onlyOddNumbersArray;
}

function removeOddValueFromArray(anyArray) {
    let onlyEvenNumbersArray = [];
    for (let i = 0; i < anyArray.length; i++) {
        if (anyArray[i] % 2 !== 0) {
            onlyEvenNumbersArray.push(anyArray[i])
        }
    }
    return onlyEvenNumbersArray;

}

console.log(removeEvenvalueFromArray(arr1));
console.log(removeOddValueFromArray(arr1));