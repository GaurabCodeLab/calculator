const numBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const acBtn = document.querySelector(".ac");
const delBtn = document.querySelector(".del");
const equalBtn = document.querySelector(".equal");
const displayField = document.getElementById("input-value");
const point = document.querySelector(".point");
let str = "";

numBtn.forEach((item) => {
  item.addEventListener("click", () => {
    str += item.textContent;
    displayField.value = str;
  });
});

point.addEventListener("click", () => {
  if (str.includes(".")) {
  } else {
    str += point.textContent;
    displayField.value = str;
  }
});
operatorBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (str != "") {
      if (
        str[str.length - 1] == "+" ||
        str[str.length - 1] == "-" ||
        str[str.length - 1] == "*" ||
        str[str.length - 1] == "/" ||
        str[str.length - 1] == "%"
      ) {
        str = str.slice(0, str.length - 1);
        str += item.textContent;
        displayField.value = str;
      } else {
        str += item.textContent;
        displayField.value = str;
      }
    }
  });
});

acBtn.addEventListener("click", () => {
  str = "";
  displayField.value = str;
});

delBtn.addEventListener("click", () => {
  str = str.slice(0, str.length - 1);
  displayField.value = str;
});

equalBtn.addEventListener("click", () => {
  const result = eval(str);
  if (result == "Infinity" || result == "-Infinity") {
    str = String(result);
    displayField.value = str;
    str = "";
  } else if (result == "0") {
    str = "";
    displayField.value = str;
  } else {
    str = String(result);
    displayField.value = str;
  }
});
