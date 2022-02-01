const sumOfArray = (numbers) => {
  sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    console.log(numbers[i]);
  }
  return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5]));