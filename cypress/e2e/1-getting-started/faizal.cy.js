describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https:/facebook.com');
  })



  it('dlogo validation', () => {

    cy.get("[alt='Facebook']").should('be.visible')




  })



  it('displays two todo items by default', () => {

    cy.get('#email').type(`abcd@gmail.com`)


    cy.get('#pass').type(`"sdsajkfshfkjsdfhsdjfsdk"`)

    cy.get("[name='login']").click();

  })

});