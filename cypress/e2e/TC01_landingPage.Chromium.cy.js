describe('E2E Testing', () => {
   it('EndtoEnd', () => {
    cy.visit('https://automationintesting.online/')
    //URL validation
    cy.title().should('eq','Restful-booker-platform demo')
    cy.scrollTo('center')
    cy.wait(4000)
    cy.get('.btn.btn-outline-primary.float-right.openBooking').scrollIntoView().click()
    cy.wait(4000)
    cy.get('.row').contains('Rooms')
    
    cy.get('.rbc-toolbar-label').contains('January 2024')
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

    cy.get('span[class="rbc-btn-group"]').contains('Next').scrollIntoView().click()
    cy.wait(2000)
    cy.get('span[class="rbc-btn-group"]').contains('Next').click()
    
    //add calendar click here with nights stay in March.
        cy.get('.rbc-button-link').contains('01').drag('.rbc-button-link','12',{ force: true }).then((success) => {
          assert.isTrue(success)
       });

    cy.get('#name.form-control').scrollIntoView()
    cy.get('#name.form-control').type('Tester')
    cy.get('#email.form-control').type('qatest@softwaretester.com')
    cy.get('#phone.form-control').type('111111-1111')
    cy.get('#subject.form-control').type('this is for testing!')
    cy.get('#description.form-control').type('this is the description')
    cy.get('.btn').contains('Submit').click()

    cy.scrollTo('center')

    cy.get('.rbc-button-link').contains('09').drag('.rbc-button-link','14').then((success) => {
      {force: true} 
   });
   
    //add confirmation validation after selecting dates and filling out the forms
  
    //add a second E2E test to create a second reservation
  }) 
   
})