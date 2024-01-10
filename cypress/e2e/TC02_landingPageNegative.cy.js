describe('Negative Testing', () => {
    it('passes', () => {
     cy.visit('https://automationintesting.online/')
     cy.get('#name.form-control').scrollIntoView()
     cy.get('#name.form-control').type('Kim')
     cy.get('#email.form-control').type('qatest@softwaretester.com')
     cy.get('#phone.form-control').type('111111-1111')
     cy.get('#subject.form-control').type('this is for testing!')
     cy.get('#description.form-control').type('this is the description')

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
    })
         
     
 
 })