function appendNumber(number) {
  document.getElementById("display").value += number;
}

function appendOperator(operator) {
  document.getElementById("display").value += operator;
}

function appendDot() {
  document.getElementById("display").value += '.';
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function calculate() {
  let result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}
