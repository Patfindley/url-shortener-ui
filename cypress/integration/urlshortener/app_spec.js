describe('App', () => {
  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000')
  })

  it('Should already have one shortened url', () => {
    cy.get('.url')
    .get('h3')
    .contains('Awesome photo')
  })

  it('Should display a page with input forms', () => {
    cy.get('[placeholder="Title..."]')
    cy.get('[placeholder="URL to Shorten..."]')
  })

  it('Should have functioning input title form', () => {
    cy.get('[placeholder="Title..."]')
    .type('Pat Findley Codes')
  })

  it('Should have functioning input url form', () => {
    cy.get('[placeholder="URL to Shorten..."]')
    .type('www.patfindleycodes.com')
  })

  it('Should renders new url info when submitted', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[placeholder="Title..."]')
    .type('Pat Findley Codes')
    .get('[placeholder="URL to Shorten..."]')
    .type('www.patfindleycodes.com')
    .get('button').click()
    .get('section > :nth-child(2)')
    .get(':nth-child(2) > h3')
    .contains('Pat Findley Codes')
  })

  it('Should display error if API fails to fetch', () => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
        statusCode: 404,
      })
    cy.visit('http://localhost:3000/')
  })

  it('Should display error if an input field is empty upon submission', () => {
    cy.get('button').click()
    .get('.error-message')
  })

  it('Should clear error message if both inputs are filled and submitted', () => {
    cy.get('button').click()
    .get('.error-message')
    cy.get('[placeholder="Title..."]')
    .type('Pat Findley Codes')
    .get('[placeholder="URL to Shorten..."]')
    .type('www.patfindleycodes.com')
    .get('button').click()
  })
  
})