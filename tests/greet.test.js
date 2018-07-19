describe("greet function", function() {
  it('should give you an error message if no name entered', function() {
    var greet = GreetFactory();
    greet.greeting("");
    assert.equal(greet.greeting(''), "Please enter your name")
  })
  it('counter should not increment if no name is inserted', function() {
    var counta = GreetFactory();
    counta.greeting('')
    counta.counter(0);
    assert.equal(counta.counter("0"), 0);
  })
  it('should greet a person in english', function() {
    var englishLang = GreetFactory();
    englishLang.greeting('Hello, Gregg')
    assert.notEqual(englishLang.greeting('Molo, Gregg'), "Hello, Gregg")
  })
  it('should give you a greeting in xhosa', function() {
    var xhosaLang = GreetFactory();
    xhosaLang.greeting("Molo, Vusi")
    assert.notEqual(xhosaLang.greeting('Hello, Vusi'), "Molo, Vusi")
  })
  it('should greet you in afrikaans', function() {
    var afrikaansLang = GreetFactory();
    afrikaansLang.greeting("Hallo, Mike")
    assert.notEqual(afrikaansLang.greeting('Hi Mike'), "Hallo, Mike")
  })
});