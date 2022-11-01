
// function bubbleSort(arr) {
//         let len = arr.length;
//         let checked;
//         do {
//           checked = false;
//           for (let i = 0; i < len; i++) {
//             if (arr[i] > arr[i + 1]) {
//               let tmp = arr[i];
//               arr[i] = arr[i + 1];
//               arr[i + 1] = tmp;
//               checked = true;
//               console.log(arr.join(","));
//             }
//         }
//     } while (checked);
//     return arr;
//   };


function bubbleSort(arr) {

  // Iterate through the array
  let counter = false
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i]
    let next = arr[i+1]
    // If the current value is greater than its neighbor to the right
    // Swap those values
  if (curr > next) {
    [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    counter = true

    // Do not move this console.log
    console.log(arr.join(","));
  }
  }
  // If you get to the end of the array and no swaps have occurred, return
  if (!counter) {
    return arr
  } else {
    // Otherwise, repeat from the beginning
    bubbleSort(arr)
  }
return arr
}

module.exports = bubbleSort;