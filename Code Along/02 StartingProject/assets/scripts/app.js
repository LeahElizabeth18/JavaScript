addBtn.addEventListener("click", add_nums);
subtractBtn.addEventListener("click", subtract_nums);
multiplyBtn.addEventListener("click", multiply_nums);
divideBtn.addEventListener("click", divide_nums);

// CONSTANTS
const defaultNum = 0;
let currentNum = defaultNum;
let calcLog = [];

// FUNCTIONS
function get_user_input() {
  return parseInt(userInput.value);
}

function writeOutput(op, initialNum, calcNum) {
  const calcDesc = `${initialNum} ${op} ${calcNum}`;
  outputResult(currentNum, calcDesc);
  createLog(op, initialNum, calcNum)
}

function createLog(op, initialNum, calcNum) {
  const logEntry = {
    op: op,
    initialNum: initialNum,
    calcNum: calcNum,
    result: currentNum
  }
  calcLog.push(logEntry);
}



// OPERATION FUNCTIONS
function add_nums() {
  const calcNum = get_user_input();
  const initialNum = currentNum;
  currentNum += calcNum;
  writeOutput("+", initialNum, calcNum);
}

function subtract_nums() {
  const calcNum = get_user_input();
  const initialNum = currentNum;
  currentNum -= calcNum;
  writeOutput("-", initialNum, calcNum);
}

function multiply_nums() {
  const calcNum = get_user_input();
  const initialNum = currentNum;
  currentNum *= calcNum;
  writeOutput("x", initialNum, calcNum);
}

function divide_nums() {
  const calcNum = get_user_input();
  const initialNum = currentNum;
  currentNum /= calcNum;
  writeOutput("/", initialNum, calcNum);
}
