const averageOfArray = (numbers) => {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
    var average = sum / i;
  }
  return average;
}
console.log(averageOfArray([1, 2, 3, 4, 5]));
console.log(averageOfArray([5, 6, 3, 4, 5]));