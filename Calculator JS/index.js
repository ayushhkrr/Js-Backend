let num1 = Number(prompt("Enter a number:"));
let operat = prompt("Enter the operator (+, -, *, /):");
let num2 = Number(prompt("Enter a number"));

let result;

if (operat === "+") {
    result = num1 + num2
} else if (operat === "-") {
    result = num1 - num2
} else if (operat === "*") {
    result = num1 * num2
} else if (operat === "/") {
    result = num1 / num2
} else {
    alert("Invalid operator!")
}

if (true) {
    console.log(`Result = ${num1} ${operat} ${num2} = ${result}`);
    
}