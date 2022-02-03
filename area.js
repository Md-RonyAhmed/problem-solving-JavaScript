// Area of triangle with 3 side given

const areaOfTriangle = (a, b, c) => {
  // Have to calculate the semi perimeter donate as S
  let S = (a + b + c) / 2;
  let area = Math.sqrt(S * ((S - a) * (S - b) * (S - c)));
  return area;
}
console.log("Area of triangle with 3 sides given....");
console.log("The area of triangle: " + areaOfTriangle(3, 4, 5));
console.log("The area of triangle: " + areaOfTriangle(6, 3, 7));
console.log("The area of triangle: " + areaOfTriangle(4, 8, 9));

// area of triangle with base and height

const areaOf_Triangle = (base, height) => {
  let area = (base * height) / 2;
  return area;
}

console.log("Area of triangle with base and height....");
console.log("The area of triangle: " + areaOf_Triangle(6, 4));
console.log("The area of triangle: " + areaOf_Triangle(7, 3));
console.log("The area of triangle: " + areaOf_Triangle(4, 8));




