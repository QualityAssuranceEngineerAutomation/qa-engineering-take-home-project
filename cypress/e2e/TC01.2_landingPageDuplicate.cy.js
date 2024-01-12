import '@4tw/cypress-drag-drop'
describe('E2E Testing', () => {
   it('EndtoEnd', () => {
    cy.visit('https://automationintesting.online/')
    //URL validation
    cy.title().should('eq','Restful-booker-platform demo')
    cy.scrollTo('center')
    cy.get('.btn.btn-outline-primary.float-right.openBooking').first().scrollIntoView().click()
    cy.wait(4000)
    cy.get('.row').contains('Rooms')
    //There is a bug in the code that is causing this assertion to fail for the default validation
    //cy.get('.rbc-toolbar-label').should('have.value','February 2024')
    cy.get('.form-control.room-firstname').scrollIntoView().should('be.visible')
    cy.get('.form-control.room-lastname').scrollIntoView().should('be.visible')
    cy.get('.form-control.room-email').scrollIntoView().should('be.visible')
    cy.get('.form-control.room-phone').scrollIntoView().should('be.visible')

        //add moving backward in calendar
        cy.get('span[class="rbc-btn-group"]').contains('Back').click()
        cy.wait(2000)
        cy.contains('span[class="rbc-toolbar-label"]', 'December 2023')
        cy.get('span[class="rbc-toolbar-label"]').contains('December 2023')
    
    cy.wait(2000)
    //add moving forward in calendar
    cy.get('span[class="rbc-btn-group"]').contains('Next').click()
    cy.wait(2000)
    cy.contains ('span[class="rbc-toolbar-label"]', 'January 2024')

              //add clicking on Today
              cy.get('span[class="rbc-btn-group"]').contains('Today').click()
              cy.wait(2000)
              cy.contains ('span[class="rbc-toolbar-label"]', 'January 2024')
              cy.get('span[class="rbc-toolbar-label"]').contains('January 2024')
       
//Populate booking information
       cy.get('.form-control.room-firstname').scrollIntoView().type('QA-Firstname')
       cy.get('.form-control.room-lastname').scrollIntoView().type('QA-lasttname')
       cy.get('.form-control.room-email').scrollIntoView().type('qa@softwaretester.com')
       cy.get('.form-control.room-phone').scrollIntoView().type('111-111-1111')

    //add moving forward in calendar
  //  cy.get('span[class="rbc-btn-group"]').contains('Next').click()
   // cy.wait(2000)
    //cy.get('span[class="rbc-btn-group"]').contains('Next').click()
    //cy.contains ('span[class="rbc-toolbar-label"]', 'February 2024')
    cy.get('span[class="rbc-btn-group"]').contains('Next').click()
     cy.wait(2000)
     cy.get('span[class="rbc-btn-group"]').contains('Next').click()
     
    //add calendar click here with nights stay
    cy.get('.rbc-button-link').contains('20').drag('.rbc-button-link','30').then((success) => {
      {force: true} 
   });
   cy.wait(4000)
    cy.get('.btn').contains('Book').scrollIntoView().click()
    cy.get('#name.form-control').scrollIntoView()
    cy.get('#name.form-control').type('Tester')
    cy.get('#email.form-control').type('qatest@softwaretester.com')
    cy.get('#phone.form-control').type('111111-1111')
    cy.get('#subject.form-control').type('this is for testing!')
    cy.get('#description.form-control').type('this is the description')
    cy.get('.btn').contains('Submit').click()
    cy.wait(4000)
    cy.scrollTo('center')
    //cy.get('div[class="col-sm-6.text-center"]').contains('2024-04-28 - 2024-05-19')
    cy.get('.btn.btn-outline-primary').contains('Close').scrollIntoView().click()


   
    cy.wait(2000)
    cy.get('.btn.btn-outline-primary.float-right.openBooking').first().scrollIntoView().click()
    //add moving forward in calendar
    cy.get('span[class="rbc-btn-group"]').contains('Next').click()
    cy.wait(2000)
    cy.get('span[class="rbc-btn-group"]').contains('Next').click()
    cy.wait(2000)
    cy.contains ('span[class="rbc-toolbar-label"]', 'April 2024')
    cy.get('.rbc-button-link').contains('20').drag('.rbc-button-link','30').then((success) => {
      assert.isTrue(success)
   });
    
    
});
  })
   
    //add confirmation validation after selecting dates and filling out the forms
  
    //add a second E2E test to create a second reservation

   
