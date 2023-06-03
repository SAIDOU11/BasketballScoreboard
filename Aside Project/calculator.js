let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  let total = num1 + num2;
  console.log(total);
  document.getElementById("sum-el").textContent = "Sum : " + total;
}
function subtract() {
  let total = num1 - num2;
  console.log(total);
  document.getElementById("sum-el").textContent = "Sum : " + total;
}
function divide() {
  let total = num1 / num2;
  console.log(total);
  document.getElementById("sum-el").textContent = "Sum : " + total;
}
function multiply() {
  let total = num1 * num2;
  console.log(total);
  document.getElementById("sum-el").textContent = "Sum : " + total;
}
