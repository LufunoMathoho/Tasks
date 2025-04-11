let input = prompt("Enter an integer:");
let number = parseInt(input, 10);

if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid integer.");
} else {
  if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
  } else if (number % 2 === 0) {
    console.log("Divisible by 2.");
  } else if (number % 3 === 0) {
    console.log("Divisible by 3.");
  } else {
    console.log("Not divisible by 2 or 3.");
  }
}
