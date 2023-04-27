import Stepper from './Stepper.vue'
 
describe('<Stepper />', () => {
  it('renders basic', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Stepper)
    cy.get('[data-cy=counter]').should('have.text', '0')
  })
  
  it('renders basic', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Stepper, { props: { initial: 100 } })
    cy.get('[data-cy=counter]').should('have.text', '100')
  })
})