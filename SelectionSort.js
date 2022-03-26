const arra = [2, 6, 3, 5, 1, 8, 9];

// time complexity O(n^2)
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort(arra));
