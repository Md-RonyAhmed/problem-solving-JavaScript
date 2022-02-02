// celsius to fahrenheit
const celsiusToFahrenheit = (celsius) => {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
// fahrenheit to celsius 
const fahrenheitToCelsius = (fahrenheit) => {
  let celsius = (fahrenheit-32)*(5/9);
  return celsius;
}

console.log(celsiusToFahrenheit(103.5));
console.log(fahrenheitToCelsius(98.4));