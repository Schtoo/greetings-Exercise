describe("greet function", function() {
  it('counter should not increment if no name is inserted', function() {
    var counta = GreetFactory();
    counta.greeting('')
    assert.equal(counta.counter(), 0);
  })
  it('should greet a person in english', function() {
    var greeter = GreetFactory();
    assert.equal(greeter.greeting('Gregg', 'IsiXhosa'), "Molo, Gregg")
  })
  it('should give you a greeting in xhosa', function() {
    var greeter = GreetFactory();
    assert.equal(greeter.greeting('Vusi', 'IsiXhosa'), "Molo, Vusi")
  })
  it('should greet you in afrikaans', function() {
    var greeter = GreetFactory();
    assert.equal(greeter.greeting('Mike', 'Afrikaans'), "Hallo, Mike")
  })
  it('chairs', function() {
    let chairs = ['white', 'blue', 'red', 'white', 'blue', 'red', 'white', 'blue', 'red', 'white', 'blue', 'red']

    function pulllColouredChairs(colour) {
      let amt = 0;
      chairs.forEach(function(chair) {
        if (chair === colour) {
          amt++
        }
      })
      return amt;
    }

    assert.equal(pulllColouredChairs('white'), 4)
  })
});