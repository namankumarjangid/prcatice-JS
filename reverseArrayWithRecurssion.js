let data = [0, 5, 10, 45, 78, 9, 456, 4, 6, 565, 1, 61];

function recurrsionArray(arrayList, startFrom, endTo) {
  let temp;
  if (startFrom <= endTo) {
    temp = arrayList[startFrom];
    arrayList[startFrom] = arrayList[endTo];
    arrayList[endTo] = temp;
    recurrsionArray(arrayList, startFrom + 1, endTo - 1);
    console.log("temp", temp);
  }
  console.log("data", data);
}

console.log(recurrsionArray(data, 0, data.length - 1));
