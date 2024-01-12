describe('Negative Testing', () => {
    it('negativeScenarios', () => {
     cy.visit('https://automationintesting.online/')
     cy.get('#name.form-control').scrollIntoView()
     cy.get('#name.form-control').clear()
     cy.get('#email.form-control').clear()
     cy.get('#phone.form-control').clear()
     cy.get('#subject.form-control').clear()
     cy.get('#description.form-control').clear()
     cy.get('.btn').contains('Submit').click()

     cy.get('.alert').contains('Name may not be blank')
     cy.get('.alert').contains('Email may not be blank')
     cy.get('.alert').contains('Phone must be between 11 and 21 characters.')
     cy.get('.alert').contains('Subject must be between 5 and 100 characters.')
     cy.get('.alert').contains('Phone may not be blank')
     cy.get('.alert').contains('Subject may not be blank')
     cy.get('.alert').contains('Message must be between 20 and 2000 characters.')
     cy.get('.alert').contains('Message may not be blank')
     cy.wait(4000)
    cy.get('#name.form-control').scrollIntoView()
    cy.get('#name.form-control').type('Tester')
    cy.get('#email.form-control').type('qatest@softwaretester.com')
    cy.get('#phone.form-control').type('111111-1111')
    cy.get('#subject.form-control').type('this is for testing!')
    cy.get('#description.form-control').type('this is the description')
    cy.wait(4000)
    cy.get('.btn').contains('Submit').click()
    cy.get('.btn.btn-outline-primary.float-right.openBooking').first().scrollIntoView().click()
     cy.get('.form-control.room-firstname').scrollIntoView().should('be.visible')
     cy.get('.form-control.room-lastname').scrollIntoView().should('be.visible')
     cy.get('.form-control.room-email').scrollIntoView().should('be.visible')
     cy.get('.form-control.room-phone').scrollIntoView().should('be.visible')

     cy.get('.btn.btn-outline-primary.float-right.book-room').scrollIntoView().click()
     

     cy.get('.alert').contains('size must be between 11 and 21')
     cy.get('.alert').contains('Firstname should not be blank')
     cy.get('.alert').contains('must not be null')
     cy.get('.alert').contains('Lastname should not be blank')
     cy.get('.alert').contains('size must be between 3 and 18')
     cy.get('.alert').contains('must not be empty')
     cy.get('.alert').contains('must not be null')
     cy.get('.alert').contains('size must be between 3 and 30')
     cy.get('.alert').contains('must not be empty')

     cy.get('.form-control.room-firstname').scrollIntoView().type('QA-Firstname')
     cy.get('.form-control.room-lastname').scrollIntoView().type('QA-lasttname')
     cy.get('.form-control.room-email').scrollIntoView().type('qa@softwaretester.com')
     cy.get('.form-control.room-phone').scrollIntoView().type('111-111-1111')

     cy.get('.rbc-button-link').contains('20').drag('.rbc-button-link','30').then((success) => {
      {force: true} 
     });
     cy.get('.btn.btn-outline-primary.float-right.book-room').scrollIntoView().click()


    })   
 })