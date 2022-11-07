/* eslint-disable no-eval */
import "./calc.css";
import React from "react";

let display = document.getElementById("screen");
let buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    if (
      button.textContent !== "=" &&
      button.textContent !== "C" &&
      button.textContent !== "x" &&
      button.textContent !== "÷" &&
      button.textContent !== "√" &&
      button.textContent !== "x²" &&
      button.textContent !== "%" &&
      button.textContent !== "<=" &&
      button.textContent !== "±" &&
      button.textContent !== "sin" &&
      button.textContent !== "cos" &&
      button.textContent !== "tan" &&
      button.textContent !== "log" &&
      button.textContent !== "ln" &&
      button.textContent !== "x^" &&
      button.textContent !== "x!" &&
      button.textContent !== "π" &&
      button.textContent !== "e" &&
      button.textContent !== "³√" &&
      button.textContent !== "n√" &&
      button.textContent !== "x³"
    ) {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus();
    } else if (button.textContent === "←") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "x²") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "x^") {
      exponent();
    } else if (button.textContent === "x!") {
      factorial();
    } else if (button.textContent === "e") {
      exp();
    } else if (button.textContent === "³√") {
      cubeRoot();
    } else if (button.textContent === "n√") {
      nRoot();
    } else if (button.textContent === "x³") {
      cube();
    }
  });
});

function equals() {
  if (display.value.indexOf("^") > -1) {
    let base = display.value.slice(0, display.value.indexOf("^"));
    let exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else if (display.value.indexOf("√") > -1) {
    let root = display.value.slice(0, display.value.indexOf("√"));
    let baseR = display.value.slice(display.value.indexOf("√") + 1);
    display.value = eval("Math.pow(" + baseR + ", 1/" + root + ")");
  } else {
    try {
      display.value = eval(display.value);
    } catch (error) {
      alert(error);
      clear();
    }
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value += "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    number = 1;
    for (var i = display.value; i > 0; i--) {
      number *= i;
    }
    display.value = number;
  }
}

function pi() {
  let lastChar = display.value.charAt(display.value.length - 1);
  if (
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "^" ||
    lastChar === "√"
  ) {
    display.value += Math.PI;
  } else {
    display.value = Math.PI;
  }
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function cube() {
  display.value = eval(display.value * display.value * display.value);
}

function cubeRoot() {
  display.value = Math.cbrt(display.value);
}

function percent() {
  let sum = display.value.indexOf("+");
  let res = display.value.indexOf("-");
  if (sum >= 0 && res >= 0) {
    alert("No se puede calcular así");
    clear();
  } else if (sum >= 0 && res < 0) {
    let num1 = parseFloat(display.value.slice(0, sum));
    let num2 = parseFloat(display.value.slice(sum + 1, display.value.length));
    display.value = num1 + num1 * (num2 / 100);
  } else if (res >= 0 && sum < 0) {
    let num1 = parseFloat(display.value.slice(0, res));
    let num2 = parseFloat(display.value.slice(res + 1, display.value.length));
    display.value = num1 - num1 * (num2 / 100);
  } else {
    alert("No se puede calcular");
    clear();
  }
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function nRoot() {
  display.value += "√";
}

function exp() {
  display.value = Math.exp(display.value);
}

const Calc = () => {
  return (
    <div className="calculator">
      <input type="text" id="screen" maxLength="20" readOnly />
      <div className="calc-buttons">
        <div className="functions-one">
          <button className="button triggers">C</button>
          <button className="button basic-stuff">(</button>
          <button className="button basic-stuff">)</button>
          <button className="button numbers">7</button>
          <button className="button numbers">8</button>
          <button className="button numbers">9</button>
          <button className="button numbers">4</button>
          <button className="button numbers">5</button>
          <button className="button numbers">6</button>
          <button className="button numbers">1</button>
          <button className="button numbers">2</button>
          <button className="button numbers">3</button>
          <button className="button basic-stuff">±</button>
          <button className="button numbers">0</button>
          <button className="button basic-stuff">.</button>
          <button className="button triggers double">=</button>
        </div>

        <div className="functions-two">
          <button className="button triggers">←</button>
          <button className="button complex-stuff">x!</button>
          <button className="button complex-stuff">log</button>
          <button className="button complex-stuff">ln</button>
          <button className="button basic-stuff">/</button>
          <button className="button complex-stuff">x^</button>
          <button className="button complex-stuff">n√</button>
          <button className="button complex-stuff">e</button>
          <button className="button basic-stuff">*</button>
          <button className="button complex-stuff">x³</button>
          <button className="button complex-stuff">³√</button>
          <button className="button complex-stuff">sin</button>
          <button className="button basic-stuff">-</button>
          <button className="button complex-stuff">x²</button>
          <button className="button complex-stuff">√</button>
          <button className="button complex-stuff">cos</button>
          <button className="button basic-stuff">+</button>
          <button className="button complex-stuff">%</button>
          <button className="button complex-stuff">π</button>
          <button className="button complex-stuff">tan</button>
        </div>
      </div>
    </div>
  );
};
export default Calc;
