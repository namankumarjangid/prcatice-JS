const arr = [1, 5, 8, 9, 45, 78, 65, 2];

// Initialize max and min with the first element of the array
let max = arr[0];
let min = arr[0];

// Loop through the array starting from the second element
for (let i = 0; i < arr.length; i++) {
  // Compare the current element with the current max and update if greater
  if (arr[i] > max) {
    max = arr[i];
  }

  // Compare the current element with the current min and update if smaller
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log("Maximum value:", max);
console.log("Minimum value:", min);

console.warn("max by MATH", Math.max(...arr));
console.warn("min by MATH", Math.min(...arr));
