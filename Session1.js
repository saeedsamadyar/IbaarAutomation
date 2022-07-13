///<reference types = "cypress"/>

it ('google saerch',function (){
    cy.visit("https://google.com")
    cy.get("input[name=q]").type("cypress")

})