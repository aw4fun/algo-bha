const my_list = [1, 2, 3, 4];

let low = 0;
let high = my_list.length-1;
let mid;
let guess;
let iterations = 0;

function binarySearch(list, point) {

  while (low <= high) {
    iterations++;
    mid = Math.floor((low + high) / 2);
    guess = list[mid];
    if (guess === point) {
      return point;
    } else {
      if (guess > point) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  return 'search is failed!';
  }
}

console.log('Point is:',binarySearch(my_list, 4), 'By iterations:', iterations);
