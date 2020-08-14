describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Om oss')
  })

  it('navigates to /blog', () => {
    cy.get('nav a').contains('Blogg').click()
    cy.url().should('include', '/blog')
  })
})
