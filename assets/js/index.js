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
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (/\d/.test(key)) {
    appendNumber(key);
  } else if (key === '.') {
    appendDot();
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendOperator(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault(); // Prevents the default action (like form submission)
    calculate();
  } else if (key === 'Backspace') {
    clearDisplay();
  }
});

function appendNumber(number) {
  const display = document.getElementById('display');
  display.value += number;
}

function appendOperator(operator) {
  const display = document.getElementById('display');
  display.value += ` ${operator} `;
}

function appendDot() {
  const display = document.getElementById('display');
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
