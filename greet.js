var buttonElement = document.querySelector(".btn");
var reset = document.querySelector(".reset");
var textElement = document.querySelector(".insert");
var printElement = document.querySelector("#screenPrint");
var countElement = document.querySelector("#counter");
var greetings = "";
var storedNames = {};

<!--//code for when the button is clicked-->
function greeted() {
  var name = textElement.value.toUpperCase();
  if (storedNames[name] === undefined) {
    storedNames[name] = 0;
  }
  var checked = document.querySelector("input[name='language']:checked");
  var checkedRadio = checked.value;
  if (checkedRadio === "english") {
    printElement.innerHTML = "Hello, " + name;
  } else if (checkedRadio === "xhosa") {
    printElement.innerHTML = "Molo, " + name;
  } else if (checkedRadio == "afrikaans") {
    printElement.innerHTML = "Hallo, " + name;
  } else {
    printElement.innerHTML = "Please select language";
  }
}

//for when a someone is greeted counter should increment
function nameCount() {
  localStorage.setItem('storedNames', JSON.stringify(storedNames));
  //localStorage.getItem(storedNames)
  countElement.innerHTML = Object.keys(storedNames).length;
  //console.log(countElement.innerHTML);
  //console.log(JSON.parse(localStorage.getItem("storedNames")));
}

//event listener for the greeted & nameCount function
buttonElement.addEventListener("click", function() {
  greeted();
  nameCount()
});

//reset button should refresh web-page
reset.addEventListener("click", function() {
  localStorage.clear();
  location.reload()
});