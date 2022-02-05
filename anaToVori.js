//give me ana you get vori

function anaToVori(ana) {
  if (typeof ana != 'number') {
    return "Please enter a valid number.";
  } else if (ana < 0) {
    return "Please enter a positive number.";
  }

  let vori = ana / 16;

  return vori;
}

console.log(anaToVori('rony'));
console.log(anaToVori(-44));
console.log(anaToVori(48));