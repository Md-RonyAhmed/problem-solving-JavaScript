// find a odd friend
let names = ["rony", "jony", "mony", "roy", "joy"];
function oddFriend(names) {
  if (typeof names !== 'object') {
    return "Please enter an array with string element"; //if the input is not an array it doesn't  show the require output.
  }
  for (let element of names) {
    if ((element.length) % 2 != 0) {
      return element;
    }
  }
}
console.log(oddFriend(names));
console.log(oddFriend("rony"));