const task3Element = document.getElementById("task-3");

function noParam() {
  alert("No Parameter Function");
}

function param(name) {
  alert(name);
}

function brandNew(str1, str2, str3) {
  return str1 + str2 + str3;
}

noParam();
param("Ooga");
task3Element.addEventListener("click", noParam);

alert(brandNew("l", "o", "l"));
