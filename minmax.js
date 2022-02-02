// maximum number
let numbers = [43, 56, 23, 78, 29, 64, 85, -56, 197];
const findMaxNumber = (numbers) => {
  let max = numbers[0];
  for (let element of numbers) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}
// minimum number
const findMinNumber = (numbers) => {
  let min = numbers[0];
  for (let element of numbers) {
    if (element < min) {
      min = element;
    }
  }
  return min;
}
console.log(findMaxNumber(numbers));
console.log(findMinNumber(numbers));
