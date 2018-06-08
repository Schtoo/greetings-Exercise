var buttonElement = document.querySelector(".btn");
var resetElement = document.querySelector(".reset");
var nameElement = document.querySelector(".name");
var printingElement = document.querySelector(".screen");
var countElement = document.querySelector("#counter");
var name = "";
var storedName = {};

function greeted() {
  var name = nameElement.value;
  if (storedName[name] == undefined) {
    storedName[name] = 0;
  }
  textElement.innerHTML = name;
  var checked = document.querySelector("input[name='language']:checked");
  var checkedRadio = checked.value;
  if (checkedRadio === "english") {
    printingElement.innerHTML = "Hello, " + name;
  } else if (checkedRadio == "xhosa") {
    printingElement.innerHTML = "Molo, " + name;
  } else if (checkedRadio == "afrikaans") {
    printingElement.innerHTML = "Hallo, " + name;
  }
};

function resetCounter() {

  console.log(Object.keys(storedName).length);
}
buttonElement.addEventListener("click", function() {
  greeted();
})
resetElement.addEventListener("click", function() {
  resetCounter();
  localStorage.clear();
  location.reload();
})