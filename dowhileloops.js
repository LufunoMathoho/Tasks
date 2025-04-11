console.log("Numbers from 1 to 10:");
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

let j = 1;
let sum = 0;
do {
  sum += j;
  j++;
} while (j <= 100);
console.log("\nSum of numbers from 1 to 100:", sum);

let userInput;

do {
  userInput = parseInt(prompt("Enter a number greater than 10:"), 10);
} while (isNaN(userInput) || userInput <= 10);

console.log("Yaaas! See, you got it!:", userInput);


const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
  if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Please enter a valid number between 1 and 10.");
  } else if (guess !== correctNumber) {
    console.log("Nope, that aint it!.");
  }
} while (guess !== correctNumber);
console.log("Yaas see, you got it!:", correctNumber);
