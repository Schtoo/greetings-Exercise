function GreetFactory(stored) {

  var names = stored || {};

  function giveName(name) {

    if (name === "") {
      return false;
    }

    if (names[name] === undefined) {
      names[name] = 0;
    }
    return name;
  }

  function greeting(name, lang) {
    var theName = giveName(name);
    if (theName === false) {
      return "please insert valid name";
    }
    if (lang === "English") {
      return "Hello, " + theName;
    } else if (lang === "isiXhosa") {
      return "Molo, " + theName;
    } else if (lang === "Afrikaans") {
      return "Hallo, " + theName;
    }
  }

  function counter() {
    return Object.keys(names).length;
  }

  function getMap() {
    return names;
  }
  return {
    greeting,
    counter,
    getMap
  }
}