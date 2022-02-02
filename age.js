const calculateAge = (num) => {
  if (num % 2 == 0) {
    return `The age: ${num} is an even number.`;
  } else {
    return `The age: ${num} is an odd number.`;
  }
}
console.log(calculateAge(23));
console.log(calculateAge(26));