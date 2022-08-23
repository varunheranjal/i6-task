import ContactUsForm from "./contactUsPage"

  
  describe('Customer accesses the i6 website, fills and tries to submit the Contact Us Form and verifies the Errors', () => {
    it('Visit the i6 website and access the About us page', () => {
      cy.visit('https://i6.io/')
      cy.get('[data-w-id="68aaf9ee-5fcc-6065-4ad6-0de5a89a23c9"]').click({ force: true })
      cy.get('[data-w-id="758b64f6-20a6-26ae-37c7-1ac812bd2e61"]').click()
  
    })
    
    it('Fill in certain details in the Contact Us form and try to submit the form', () => {
      /* I created the below Page object pattern to show that this code can be written using POM as well (refer the contactUsPage.js file) 
         But in this particular scenario, I thought creating a Cypress "Custom Commands" would suit better as this is a 'customised' one time scenario.. and also the entire actions can be squeezed into 
         One Single Row as shown below after the commented code ... From a performance perspective, both approaches take exactly 10 seconds to run so doesn't matter much*/
      
      // ContactUsForm.enterFirstName('Test')
      // ContactUsForm.enterLastName('Quality')
      // cy.get('[data-name="Company"]').should('have.value', '')
      // ContactUsForm.enterEmailId('aaaa88888')
      // cy.get('[data-name="Number"]').should('have.value', '')
      // ContactUsForm.selectEnquiryType()
      // cy.get('[data-name="Message"]').should('have.value', '')
      // ContactUsForm.selectEmailOptIn()
      // ContactUsForm.clickSubmitBtn()

      cy.ContactFormInput('Test', 'Quality', 'aaaa88888')

    }),

    it('Verify the Validation Messages seen for each of the respective fields', () => {
      cy.get('input:invalid').should('have.length', 3)
      cy.get('[data-name="Company"]').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get('[data-name="Company"]').type("Top Gun Maverick")
      cy.get('.i6-button').click({force: true})

      cy.get('input:invalid').should('have.length', 2)
      cy.get('[data-name="Email"]').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'aaaa88888' is missing an '@'.")
      })
      cy.get('[data-name="Email"]').clear().type("aaaa@8888.com")
      cy.get('.i6-button').click({force: true})

      cy.get('input:invalid').should('have.length', 1)
      cy.get('#Message-2').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
  
    })
  })