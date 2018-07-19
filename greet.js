var buttonElement = document.querySelector('#btn');
var reset = document.querySelector(".reset");
var textElement = document.querySelector(".insert");
var errorElement = document.querySelector('#errorPrint');
var printElement = document.querySelector("#screenPrint");
var countElement = document.querySelector("#count");

var storedNames = localStorage.getItem('storedNames') ? JSON.parse(localStorage.getItem("storedNames")) : {};

var greeter = GreetFactory(storedNames);
<!--//code for when the button is clicked-->
function greeted() {
  errorElement.innerHTML = "";
  var name = textElement.value.toLowerCase();
  var checked = document.querySelector("input[name='language']:checked");
  //check if it exists in map if not add it
  if (checked) {
    var language = checked.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    if (name === "") {
      // display message
      errorElement.innerHTML = "Please enter your name";
      return;
    }
    printElement.innerHTML = greeter.greeting(name, language);
    countElement.innerHTML = greeter.counter();
    localStorage.setItem('storedNames', JSON.stringify(greeter.getMap()));
    textElement.value = "";
  } else {
    // display message
    errorElement.innerHTML = "Please select language";
  }
}
//event listener for the greeted & nameCount function
buttonElement.addEventListener("click", function() {
  greeted();
});
window.addEventListener("load", function() {
  countElement.innerHTML = greeter.counter();
})
//reset button should refresh web-page
reset.addEventListener("click", function() {
  localStorage.clear();
  location.reload()
});