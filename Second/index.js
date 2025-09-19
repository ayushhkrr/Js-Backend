let number = Math.floor(Math.random() * 100) + 1;

let attempt = 0;
while (true) {
  let guess = Number(prompt("Enter a number:"));
  attempt++;
  console.log("You guessed:", guess);
  if (guess === number) {
    console.log("Congratulations! you guessed it right.");
    break;
  } else if (guess < number) {
    console.log("The number is low! Try Again.");
  } else if (guess > number) {
    console.log("The number is high! Try Again");
  } else {
    console.log("The request is invalid! Try Again");
  }
}
