console.log("Numbers from 1 to 10:");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("\nEven numbers from 1 to 20:");
let j = 1;
while (j <= 20) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

let k = 1;
let sum = 0;
while (k <= 100) {
  sum += k;
  k++;
}
console.log("\nSum of numbers from 1 to 100:", sum);

console.log("\nMultiples of 5 less than 50:");
let m = 1;
while (m < 50) {
  if (m % 5 === 0) {
    console.log(m);
  }
  m++;
}
