describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Does not do much', () => {
  it('does nothing', () => {
    expect(true).to.equal(true)
    })
})

