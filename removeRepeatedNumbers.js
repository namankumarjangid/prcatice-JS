// remove duplicate numbers from array

const arr1 = [1, 5, 46, 45, 89, 45, 78, 15, 65, 23, 89];

// trying the same for string values
const arr2 = ["naman", "nishu", "nishant", "naman", "nishu"];



const removeRepeatedNumbersFromArray = (inputData) => {
    let uniqueNumbers = []
    inputData.map(number => {
        let counts = uniqueNumbers.filter(uniqueNo => uniqueNo == number)
        if (counts.length != 1) uniqueNumbers.push(number)
    })
    return uniqueNumbers
}

const removeRepeatedNumbersFromArray2 = (inputData) => {
    const uniqueNumbers = [];
    const numberCount = {};

    inputData.forEach(number => {
        if (!numberCount[number]) {
            numberCount[number] = 1;
            uniqueNumbers.push(number);
        }
    });

    return uniqueNumbers;
}


// Array.from --> used to convert set data type to array again

// console.log(new Set(arr1));
// console.log(Array.from(new Set(arr2)));

console.log(removeRepeatedNumbersFromArray2(arr1));
