describe('E2E Testing', () => {
   it('EndtoEnd', () => {
    cy.visit('https://automationintesting.online/')
    //URL validation
    cy.title().should('eq','Restful-booker-platform demo')
    cy.get('.btn.btn-outline-primary.float-right.book-room').scrollIntoView().click()

    cy.scrollTo('center')
    cy.wait(4000)
    cy.get('.row').contains('Rooms')
    cy.get('.btn').contains('Book this room').click()
    cy.get('.rbc-toolbar-label').contains('February 2024')
    //cy.get('.rbc-button-link').contains('10')
    cy.wait(4000)
    cy.get('.form-control.room-firstname').scrollIntoView().should('be.visible')
    cy.get('.form-control.room-lastname').scrollIntoView().should('be.visible')
    cy.get('.form-control.room-email').scrollIntoView().should('be.visible')
    cy.get('.form-control.room-phone').scrollIntoView().should('be.visible')

    cy.get('.form-control.room-firstname').scrollIntoView().type('QA-Firstname')
    cy.get('.form-control.room-lastname').scrollIntoView().type('QA-lasttname')
    cy.get('.form-control.room-email').scrollIntoView().type('qa@softwaretester.com')
    cy.get('.form-control.room-phone').scrollIntoView().type('111-111-1111')

    //add calendar click here with min 2 nights stay

    cy.get('#name.form-control').scrollIntoView()
    cy.get('#name.form-control').type('Tester')
    cy.get('#email.form-control').type('qatest@softwaretester.com')
    cy.get('#phone.form-control').type('111111-1111')
    cy.get('#subject.form-control').type('this is for testing!')
    cy.get('#description.form-control').type('this is the description')
    cy.get('.btn').contains('Submit').click()
   
    //add confirmation validation after selecting dates and filling out the forms
  
    //add a second E2E test to create a second reservation
  }) 
   
})