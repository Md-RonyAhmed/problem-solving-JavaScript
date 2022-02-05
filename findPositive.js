let numbers = [-32, -43, 56, 0, 73, 23, -21, -86, -98];

function getPositiveNumber(numbers) {
  let positiveNumbers = [];
  numbers = numbers.sort(function (a, b) { return b - a; })
  for (let element of numbers) {
    if (element < 0) {
      continue;
    }
    if (element >= 0) {
      positiveNumbers.push(element);
    }
  }
  return positiveNumbers;
}


let positive = getPositiveNumber(numbers);
console.log(positive);