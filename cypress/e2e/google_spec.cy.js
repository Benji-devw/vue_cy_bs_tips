describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('https://dev.reality-academy.fr/login')
    cy.get('input[type=email]').type('test')
    cy.get('input[type=password]').type('testtest')
    cy.get('button[type=submit]').click()
  })
})