var buttonElement = document.querySelector(".btn");
var reset = document.querySelector(".reset");
var textElement = document.querySelector(".insert");
var printElement = document.querySelector("#screenPrint");
var countElement = document.querySelector("#counter");

var storedNames = localStorage.getItem('storedNames') ? JSON.parse(localStorage.getItem("storedNames")) : {};

<!--//code for when the button is clicked-->
function greeted() {
  var name = textElement.value.toLowerCase();
  var restOfName = name.substring(1);
  name = name.charAt(0).toUpperCase() + restOfName;
  if (name === undefined || name === "") {
    printElement.innerHTML = "Please insert your name";
    return;
  } else if (name == NaN) {
    printElement.innerHTML = "Please insert valid name";
    return;
  }
  var checked = document.querySelector("input[name='language']:checked");
  if (checked) {
    //check if it exists in map if not add it
    if (storedNames[name] === undefined) {
      storedNames[name] = 0;
    }
    var checkedRadio = checked.value;
    nameCount();

    if (checkedRadio === "English") {
      printElement.innerHTML = "Hello, " + name;
    } else if (checkedRadio === "isiXhosa") {
      printElement.innerHTML = "Molo, " + name;
    } else if (checkedRadio === "Afrikaans") {
      printElement.innerHTML = "Hallo, " + name;
    } else if (checkedRadio === undefined) {
      printElement.innerHTML = "Please select language " + name;
    }
  }
}

//greet button clicked counter should increment
function nameCount() {
  localStorage.setItem('storedNames', JSON.stringify(storedNames));
  countElement.innerHTML = Object.keys(storedNames).length;
}
//event listener for the greeted & nameCount function
buttonElement.addEventListener("click", function() {
  greeted();
});
window.addEventListener("load", function() {
  nameCount();
})
//reset button should refresh web-page
reset.addEventListener("click", function() {
  localStorage.clear();
  location.reload()
});