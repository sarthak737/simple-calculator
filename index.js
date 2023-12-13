let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let finalAns = document.getElementById("sum-el");
function add() {
  finalAns.textContent = "Sum: ";
  finalAns.textContent += num1 + num2;
}

function subtract() {
  finalAns.textContent = "Difference: ";
  finalAns.textContent += num1 - num2;
}

function divide() {
  finalAns.textContent = "Division: ";
  finalAns.textContent += num1 / num2;
}

function multiply() {
  finalAns.textContent = "Multiplication: ";
  finalAns.textContent += num1 * num2;
}
