Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("#user_login").type(user)
      cy.get("#user_password").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    login()
  })

  Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
  })

  Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')

    const name = project.name;
    const description = project.description
    
  
    cy.get('#project_name').type(name, { delay: 0 })
    cy.get('#project_description').type(description, { delay: 0 })
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
  })