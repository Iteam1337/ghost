describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/om-oss')
  })

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Vi är en digitaliseringsbyrå')
  })

  it('navigates to /aktuellt', () => {
    cy.get('nav a').contains('Aktuellt').click()
    cy.url().should('include', '/aktuellt')
  })
})
