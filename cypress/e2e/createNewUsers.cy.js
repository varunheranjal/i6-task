Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  describe('Valid User logs into eduMe portal and create two New Users', () => {
    beforeEach('Log into the edume portal', () => {
      cy.visit('https://deathstar-br-qa-test-review-ap.herokuapp.com/')
      cy.get('[data-automation="email-input"]').type('edume@edume.com')
      cy.get('[data-automation="email-button"]').click()
      cy.get('[data-automation="password-input"]').clear().type('cheesecat')
      cy.get('[data-automation="password-button"]').click()
  
    }),
    
    it('Create a New User via Email', () => {
      cy.get('[data-automation="header-item-people"]').click({ force: true })
      cy.get('.styles_dropdown-wrapper__9o5bg > .styles_primary__hk7t8').then(($btn) => {
        if($btn.is(":disabled")) {
            cy.get('[data-automation="create-team-button"]').click( {force: true})
            cy.get('[data-automation="team-or-group-name-input"]').clear().type('Test Team')
            cy.get('[data-automation="confirm-create-team-or-group-button"]').click()
            cy.contains('Test Team').should('be.visible')
            cy.get('[data-automation="all-teams-new-team-dropdown"]').click()
        }
        else {
            cy.get('[data-automation="all-teams-new-team-dropdown"]').click()
        }
      })
      cy.contains('Add a single user').click({force: true})
      cy.get('[data-automation="add-team-member-first-name-input"]').type('Victor')
      cy.get('[data-automation="add-team-member-last-name-input"]').type('Frankenstein')
      cy.get('[data-automation="add-team-member-email-input"]').type('test.one@edume.com')
  
      cy.get('[data-automation="add-user-to-team-button"]').click({ force: true })
      cy.wait(5000)
  
      cy.get('.styles_interactive__qdry6').click()
      cy.contains("Victor Frankenstein").should('be.visible')
    }),
  
    it('Create a New User via Phone number', () => {
      cy.get('[data-automation="header-item-people"]').click({ force: true })
      cy.get('.styles_dropdown-wrapper__9o5bg > .styles_primary__hk7t8').then(($btn) => {
        if($btn.is(":disabled")) {
            cy.get('[data-automation="create-team-button"]').click( {force: true})
            cy.get('[data-automation="team-or-group-name-input"]').clear().type('Test Team')
            cy.get('[data-automation="confirm-create-team-or-group-button"]').click()
            cy.contains('Test Team').should('be.visible')
            cy.get('[data-automation="all-teams-new-team-dropdown"]').click()
        }
        else {
            cy.get('[data-automation="all-teams-new-team-dropdown"]').click()
        }
      })
      cy.contains('Add a single user').click({force: true})
      cy.get('[data-automation="add-team-member-first-name-input"]').clear().type('Harry')
      cy.get('[data-automation="add-team-member-last-name-input"]').clear().type('Potter')
      cy.contains('Phone').click()
      cy.get('.styles_button-content__1c38v > :nth-child(1)').click()
      cy.get('.styles_scrollContainer__1nh44 > :nth-child(1) > .styles_linkContainer__eg3bl > .styles_primary__eg3bl').click()
      // cy.get('#styles_linkContainer__eg3bl').should('contain.value', 'United Kingdom +44')
      cy.get('[placeholder="Mobile number"]').clear().type('7424007660')
  
      cy.get('[data-automation="add-user-to-team-button"]').click({ force: true })
      cy.wait(5000)
  
      cy.get('.styles_interactive__qdry6').click()
      cy.contains("Harry Potter").should('be.visible')
  
    }),

    afterEach('Log out of the edume portal', () => {
        cy.get('.src-components-core-Header-styles__profile__ExXwe').click({ force: true })
        cy.get('.styles_scrollContainer__1nh44 > div > .styles_linkContainer__eg3bl > .styles_primary__eg3bl').click({ force: true })
    
    })
  })