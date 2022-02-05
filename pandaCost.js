// total cost in food panda

function pandaCost(shingaraQuantity, somuchaQuantity, jilebiQuantity) {
  if (typeof shingaraQuantity != 'number' || typeof somuchaQuantity != 'number' || typeof jilebiQuantity!= 'number') {
    return "Please enter three valid number.";
  } else if (shingaraQuantity <0 || somuchaQuantity < 0 || jilebiQuantity < 0) {
    return "Please enter three positive number of quantity.";
  }
  
  const shingaraPrice = 7; //per shingara 7 tk.
  const somuchaPrice = 10; //per somucha 10 tk.
  const jilebiPrice = 15; //per jilebi 15 tk.

  let totalShingaraPrice = shingaraPrice * shingaraQuantity;
  let totalSomuchaPrice = somuchaPrice * somuchaQuantity;
  let totalJilebiPrice = jilebiPrice * jilebiQuantity;

  let totalCost = totalShingaraPrice + totalSomuchaPrice + totalJilebiPrice;

  return totalCost;

}

console.log(pandaCost('rony', 3, 4));
console.log(pandaCost(-3, 3, 4));
console.log(pandaCost(3, 3, 4));
