const defaultResult = 0;
let currentResult = defaultResult;

let calcDescription = "";

addBtn.addEventListener("click", add_nums);

function add_nums() {
  const result = currentResult + userInput.value;
  outputResult(currentResult, calcDescription);
}
