let numbers = [95, 66, 80, 59, 47, 77, 30];

for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] >= 90 && numbers[i] <= 100) {
    console.log(`You got A+ and your number is: ${numbers[i]}`);
  } else if (numbers[i] >= 80 && numbers[i] < 90) {
    console.log(`You got A and your number is: ${numbers[i]}`);
  } else if (numbers[i] >= 70 && numbers[i] < 80) {
    console.log(`You got B and your number is: ${numbers[i]}`);
  } else if (numbers[i] >= 60 && numbers[i] < 70) {
    console.log(`You got C and your number is: ${numbers[i]}`);
  } else if (numbers[i] >= 50 && numbers[i] < 60) {
    console.log(`You got D and your number is: ${numbers[i]}`);
  } else {
    console.log(`You Failed and your number is: ${numbers[i]}`);
  }
}
