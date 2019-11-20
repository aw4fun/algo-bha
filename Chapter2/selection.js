const my_arr = [25, 11, 7, 22, 3, 14];

function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 1; i < arr.length ; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function selectionSort(arr) {
  const timelaps = arr.length;
  let newArr = [];
  for (let i = 0; i < timelaps; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  return newArr;
}

console.log(selectionSort(my_arr));