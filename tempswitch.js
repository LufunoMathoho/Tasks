let input = prompt("Enter the temperature:");
let temp = parseFloat(input);

if (isNaN(temp)) {
  console.log("Invalid input. Please enter a number.");
} else {
  switch (true) {
    case (temp < 0):
      console.log("It's freezing!");
      break;
    case (temp >= 0 && temp <= 15):
      console.log("It's cold.");
      break;
    case (temp >= 16 && temp <= 25):
      console.log("It's mild.");
      break;
    case (temp > 25):
      console.log("It's warm.");
      break;
    default:
      console.log("Unexpected value.");
  }
}
