// Find prime number 
const isPrimeNumber = (num) => {
  
  if (num > 1) {
    let flag = 0;
    for (let i = 2; i <= num / 2; i++){
      if (num % i == 0) {
        console.log(` ${num} is not a prime number.`);
        flag = 1;
      }
      break;
    }
    if (flag == 0) {
      console.log(` ${num} is a prime number.`);
    }
  } else {
    console.log("Please enter a number greater than one.")
  }
  
}
    isPrimeNumber(1);
    isPrimeNumber(2);
    isPrimeNumber(3);
    isPrimeNumber(4);
    isPrimeNumber(8);
    isPrimeNumber(11);
    isPrimeNumber(12);
