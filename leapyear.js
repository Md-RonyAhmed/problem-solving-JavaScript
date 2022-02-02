const getLeapYear = (year) => {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    return `The ${year} is a leap year.`
  } else {
    return `The ${year} is not a leap year.`;
  }
}
console.log(getLeapYear(1900));
console.log(getLeapYear(1992));
console.log(getLeapYear(2000));
console.log(getLeapYear(2023));
console.log(getLeapYear(2022));
