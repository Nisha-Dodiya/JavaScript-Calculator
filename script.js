let firstNumber = "";
let secondNumber = "";
let operator = "";
let isOperatorClicked = false;

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Clear
    if (value === "C") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      isOperatorClicked = false;
      display.value = "0";
    }

    // Backspace
    else if (value === "⌫") {
      if (!isOperatorClicked) {
        firstNumber = firstNumber.slice(0, -1);
        display.value = firstNumber || "0";
      } else {
        secondNumber = secondNumber.slice(0, -1);
        display.value = secondNumber || "0";
      }
    }

    // Operator
    else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      operator = value;
      isOperatorClicked = true;
    }

    // Equal
    else if (value === "=") {
      let result;

      if (operator === "+") {
        result = Number(firstNumber) + Number(secondNumber);
      } else if (operator === "-") {
        result = Number(firstNumber) - Number(secondNumber);
      } else if (operator === "*") {
        result = Number(firstNumber) * Number(secondNumber);
      } else if (operator === "/") {
        result = Number(firstNumber) / Number(secondNumber);
      }

      display.value = result;

      // Store result for next calculation
      firstNumber = result.toString();
      secondNumber = "";
      operator = "";
      isOperatorClicked = false;
    }

    // Numbers and decimal point
    else {
      if (!isOperatorClicked) {
        firstNumber += value;
        display.value = firstNumber;
      } else {
        secondNumber += value;
        display.value = secondNumber;
      }
    }
  });
});