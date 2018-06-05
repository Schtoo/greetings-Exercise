describe("greet function", function() {
  it("should give you a greeting in Englsih", function() {
    assert.equal("hello Dre", greeted("Dre"))
  })
  it("should give you a greeting in Xhosa", function() {
    assert.equal("molo Dre", greeted("Dre"))
  })
  it("should give you a greeting in Afrikaans", function() {
    assert.equal("hallo Dre", greeted("Dre"))
  })
});