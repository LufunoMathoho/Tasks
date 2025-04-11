let input = prompt("Enter the temperature:");
let temp = parseFloat(input);

if (isNaN(temp)) {
  console.log("Invalid input. Please enter a number.");
} else {
  if (temp < 0) {
    console.log("It's freezing!");
  } else if (temp >= 0 && temp <= 15) {
    console.log("It's cold.");
  } else if (temp >= 16 && temp <= 25) {
    console.log("It's mild.");
  } else {
    console.log("It's warm.");
  }
}
