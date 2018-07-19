function GreetFactory(stored) {

  var names = stored || {};

  function addToMap(name) {
    if (name) {
      if (names[name] === undefined) {
        names[name] = 0;
      }
    }
  }

  function greeting(theName, lang) {
    addToMap(theName);
    if (lang === "English") {
      return "Hello, " + theName;
    } else if (lang === "IsiXhosa") {
      return "Molo, " + theName;
    } else if (lang === "Afrikaans") {
      return "Hallo, " + theName;
    }
  }

  function counter() {
    //console.log(names)
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