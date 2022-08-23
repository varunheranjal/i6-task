// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('ContactFormInput', (firstName, lastName, emailId) => {
    cy.get('[data-name="First Name"]').clear().type(firstName)
    cy.get('[data-name="Last Name"]').clear().type(lastName)
    cy.get('[data-name="Company"]').should('have.value', '')
    cy.get('[data-name="Email"]').clear().type(emailId)
    cy.get('[data-name="Number"]').should('have.value', '')
    cy.get('[data-name="Enquiry"]').select('Careers', { force: true }).invoke('val').should('eq', 'Careers')
    cy.get('[data-name="Message"]').should('have.value', '')
    cy.get('[data-name="Subscribe to Email"]').check()
    cy.get('.i6-button').click({force: true})

  })