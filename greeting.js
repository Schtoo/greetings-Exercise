function greetFactory() {

  function Errors() {
    if (name === undefined || name === "") {
      printElement.innerHTML = "Please insert your name";
      return;
    } else if (name == NaN) {
      printElement.innerHTML = "Please insert valid name";
      return;
    }
  }

  function CheckedButton(checkedRadio) {
    if (storedNames[name] === undefined) {
      storedNames[name] = 0;
    }
    if (checkedRadio === "English") {
      printElement.innerHTML = "Hello, " + name;
    } else if (checkedRadio === "isiXhosa") {
      printElement.innerHTML = "Molo, " + name;
    } else if (checkedRadio === "Afrikaans") {
      printElement.innerHTML = "Hallo, " + name;
    } else if (checkedRadio === undefined) {
      printElement.innerHTML = "Please select language " + name;
      return;
    }
  }
  return {
    Errors,
    CheckedButton
  }
}