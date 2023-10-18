function findPairWithSum(arr, target) {
  const numMap = {}; // Step 1

  for (let i = 0; i < arr.length; i++) {
    // Step 2
    const difference = target - arr[i]; // Step 3

    if (numMap[difference] !== undefined) {
      // Step 4
      return [arr[i], difference]; // Step 5
    }

    numMap[arr[i]] = i; // Store the current number in the object
  }

  return null; // Return null if no pair is found
}

const Arr = [2, 3, 4, 8, 55];
const Target = 62;

const result = findPairWithSum(Arr, Target);
if (result) {
  console.log(`Pair found: ${result[0]} and ${result[1]}`);
} else {
  console.log("No pair found.");
}

// output occurence.

// console.log("a")
// setTimeout(() => {
//     console.log("b")
// }, 0);
// console.log("c")
