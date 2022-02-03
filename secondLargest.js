// find second largest in array
let numbers = [23, 45, 65, 78, 98, 54];

const secondLargestNumber = (numbers) => {
  var second_highest = numbers.sort(function (a, b) { return b - a; })[1];
  return second_highest;
}

console.log(secondLargestNumber(numbers));