function trafficSignal(signal) {
  if (signal === "red") {
    // console.log("Danger! Don't cross the road.");
    return "Danger! Don't cross the road.";
  } else if (signal === "yellow") {
    console.log("Yay! Go to the zebra crossing and cross the road.");
  } else if (signal === "green") {
    console.log("Safe! You can cross the road safely.");
  } else {
    console.log("You should choice right color...");
  }
}

let alertSignal1 = trafficSignal("red");
console.log(alertSignal1);
let alertSignal2 = trafficSignal("yellow");
let alertSignal3 = trafficSignal("green");
let alertSignal4 = trafficSignal("blue");
