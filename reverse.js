// reverse string
const names = "rohit";

function reverseTheString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseTheString(names));

// reverse array
const arr2 = [1, 8, 56];
const newArr = arr2.reverse();
// const lastElement = newArr.at(-1); // OR below
const lastElement = newArr[newArr.length - 1];

console.log(lastElement);

// EL - 12
// ML - 6
// SL - 2
// TL - 4 (quarterly 1)
// CL - 3
