// find the total budget in picnic

function picnicBudget(totalMembers) {
  if (typeof totalMembers != 'number') {
    return "Please enter a valid number.";
  } else if (totalMembers < 0) {
    return "Please enter a positive number.";
  }

  if (totalMembers <= 100) {
    let firstCost = totalMembers * 5000;
    return firstCost;
  }
  else if (totalMembers <= 200) {
    let restMembers = totalMembers - 100;
    let firstCost = 100 * 5000;
    let secondCost = restMembers * 4000;
    let totalSecondCost = firstCost + secondCost;
    return totalSecondCost;
  }
  else {
    let restMembers = totalMembers - 200;
    let firstCost = 100 * 5000;
    let secondCost = 100 * 4000;
    let thirdCost = restMembers * 3000;
    let totalFinalCost = firstCost + secondCost + thirdCost;
    return totalFinalCost;
  }
}

console.log(picnicBudget('rony'));
console.log(picnicBudget(-39));
console.log(picnicBudget(30));
console.log(picnicBudget(130));
console.log(picnicBudget(220));
console.log(picnicBudget(300));
