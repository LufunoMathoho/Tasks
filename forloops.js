console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("\nEven numbers from 1 to 20:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("\nThe sum of numbers from 1 to 100 is:", sum);

const numbers1 = [1, 2, 3, 4, 5];
console.log("\nThe elements of the array are:");
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > largest) {
    largest = numbers2[i];
  }
}
console.log("\nThe largest number in the array is:", largest);
