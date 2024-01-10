describe('E2E Testing', () => {
   it('passes', () => {
    cy.visit('https://automationintesting.online/')
    //URL validation
    cy.title().should('eq','Restful-booker-platform demo')
    cy.get('#name.form-control').scrollIntoView()
    cy.get('#name.form-control').type('Tester')
    cy.get('#email.form-control').type('qatest@softwaretester.com')
    cy.get('#phone.form-control').type('111111-1111')
    cy.get('#subject.form-control').type('this is for testing!')
    cy.get('#description.form-control').type('this is the description')
    cy.get('.btn').contains('Submit').click()
    cy.scrollTo('center')
    cy.wait(4000)
    cy.get('.row').contains('Rooms')
    cy.get('.btn').contains('Book this room').click()
    cy.get('.rbc-toolbar-label').contains('January 2024')
    cy.get('.rbc-button-link').contains('09')
    cy.get('#.form-control').first().scrollIntoView().should('be.visible')
    //cy.get("input[placeholder='Lastname'}]").type('QA-Last')
    //cy.get("input[placeholder='Lastname'}]").type('QA-Last')
    //cy.get('input[name="email"}]').type('tester@qa.com')
    //cy.get('input[name="phone"}]').type('000000-0000')
    //cy.get('.btn').contains('Book').click()
  }) 
   
})