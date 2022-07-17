///<reference types = "cypress"/>

it ('google saerch',function (){
  cy.visit("https://front.ibaar.ir")
  cy.get("input[name=q]").type("cypress")

})