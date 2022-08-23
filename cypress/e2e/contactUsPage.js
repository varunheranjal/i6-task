const firstName = '[data-name="First Name"]'
const lastName = '[data-name="Last Name"]'
const userEmailId = '[data-name="Email"]'
const companyName = '[data-name="Company"]'
const userContactNum = '[data-name="Number"]'
const enquiryType = '[data-name="Enquiry"]'
const userMessage = '[data-name="Message"]'


class ContactUsForm {
    static enterFirstName(FirstNameInput) {
        cy.get(firstName).clear().type(FirstNameInput)
    }
    static enterLastName(LastNameInput) {
        cy.get(lastName).clear().type(LastNameInput)
    }
    static enterCompanyName(CompNameInput) {
        cy.get(companyName).clear().type(CompNameInput)
    }
    static enterEmailId(EmailIdInput) {
        cy.get(userEmailId).clear().type(EmailIdInput)
    }
    static enterUserContactNo(ContactNumInput) {
        cy.get(userContactNum).clear().type(ContactNumInput)
    }
    static selectEnquiryType() {
        cy.get(enquiryType).select('Careers', { force: true }).invoke('val').should('eq', 'Careers')
    }
    static enterUserMessage(UserMsgInput) {
        cy.get(userMessage).clear().type(UserMsgInput)
    }
    static selectEmailOptIn() {
        cy.get('[data-name="Subscribe to Email"]').check()
    }
    static clickSubmitBtn() {
        cy.get('.i6-button').click({force: true})
    }
}

export default ContactUsForm