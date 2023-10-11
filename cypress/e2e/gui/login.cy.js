describe('Login', () => {
   
  it('Successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false } 

    cy.login(user, password , options)
    
    cy.visit('http://localhost/')
    cy.get('.qa-user-avatar').should('be.visible')
  })
})