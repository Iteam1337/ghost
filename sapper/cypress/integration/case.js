describe('/case', () => {
  beforeEach(() => {
    cy.visit('/case')
  })

  it('renders', () => {
    cy.contains('h1', 'Våra case')
  })
})
