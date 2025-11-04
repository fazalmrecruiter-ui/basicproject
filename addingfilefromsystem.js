
describe('example to-validate login', () => {
    beforeEach(() => {

        cy.visit('https://practicetestautomation.com/practice-test-login/');
    })



    it('validate title of the website', () => {


        cy.title().should('eq', "Test Login | Practice Test Automation");



    })



    it('login to websitet', () => {

        cy.get('[id="username"]').type(`student`)


        cy.get('[id="password"]').type(`Password123`)

        cy.get("[id='submit']").click();

       // cy.contains('Submit').click();

        cy.get('div >h1').should('contain.text', 'Logged In ');

        cy.get('div >h1').should('have.text', 'Logged In Successfully');


        cy.title().should('eq', 'Logged In Successfully | Practice Test Automation')

        cy.contains('Log out').click();

        cy.title().should('eq', "Test Login | Practice Test Automation");

    })




});