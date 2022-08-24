import '@testing-library/cypress/add-commands'

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

describe('app component', () => {
  beforeEach(() => {
    cy.visit('/')
    // cy.visit('http://localhost:3000')
  })
  it('should render a header that says Hello World!', () => {
    cy.get(".baseline").should('contain', 'Hello World!');
  })  
  it('should change the text header when the button is clicked', () => {
    cy.get(".mainButton").click();
    cy.get(".baseline").should("contain", "Hello Galaxy!");
  })
  // it('should do something', () => {
  //   cy.findByRole('link', {name: /faq/i});
  //   cy.get('[href="/faq/questions/using-cypress-faq.html"]');
  //   cy.get('ul > li:nth-child(5) > a');
  //   // cy.get('select').select('FAQ');
  // })
    // it("should do something", () => {
    //   cy.findByRole('button', {name: /submit/i}).click();
    // });

});


describe("Google", () => {
  beforeEach(() => {
    cy.visit("http://www.google.com");
  });
  it("searching for 'Platform One' yields search results", () => {
    /* YOUR CODE GOES BELOW THIS LINE */
    cy.get('input[name="q"]').type("Platform One{enter}");
    /* NO CODE BELOW THIS LINE */
  });
});