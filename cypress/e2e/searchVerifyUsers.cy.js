Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  describe('Scenario for searching and verifying users', () => {
    it('Log into the edume portal', () => {
      cy.visit('https://deathstar-br-qa-test-review-ap.herokuapp.com/')
      cy.get('[data-automation="email-input"]').type('edume@edume.com')
      cy.get('[data-automation="email-button"]').click()
      cy.get('[data-automation="password-input"]').clear().type('cheesecat')
      cy.get('[data-automation="password-button"]').click()
  
    }),
    
    it('Search Users via Email and Number', () => {
      cy.get('[data-automation="header-item-people"]').click({ force: true })
      cy.get('[data-automation="users-tab"]').click({ force: true })
      cy.get('[type="search"]').click()
      cy.get('.src-components-peopleAndTeams-ControlBar-SearchInput-styles__input__aXHOM').clear().type('7424007660')
      cy.contains('Harry Potter').should('be.visible')

      cy.get('.src-components-peopleAndTeams-ControlBar-SearchInput-styles__input__aXHOM').clear().type('test.one@edume.com')
      cy.contains('Victor Frankenstein').should('be.visible')
  
    })
  
  })