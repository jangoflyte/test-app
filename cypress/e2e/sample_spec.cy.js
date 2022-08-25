import "@testing-library/cypress/add-commands";

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
  });
});

describe("Does not do much", () => {
  it("does nothing", () => {
    expect(true).to.equal(true);
  });
  it("does some test", () => {
    cy.findAllByRole("checkbox").should("have.length", 7);
    cy.findByRole('button').click();
    // cy.findByLabelText('Violet').check();
  });
});
