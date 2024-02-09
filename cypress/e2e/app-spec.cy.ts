describe("template spec", () => {
  it("should add values to each input and successfully show a table of investment results", () => {
    cy.visit("http://localhost:5174/")

    cy.get('[data-cy="input-initial-investment"]').click().clear()
    cy.get('[data-cy="input-initial-investment"]').type("100")

    cy.get('[data-cy="input-annual-investment"]').click().clear()
    cy.get('[data-cy="input-annual-investment"]').type("1000")

    cy.get('[data-cy="input-expected-return"]').click().clear()
    cy.get('[data-cy="input-expected-return"]').type("5.")

    cy.get('[data-cy="input-duration"]').click().clear()
    cy.get('[data-cy="input-duration"]').type("1")

    cy.get('[data-cy="results-table"]').should("exist")
  })

  it("should display an error paragraph if the input duration is equal to zero", () => {
    cy.visit("http://localhost:5174/")

    cy.get('[data-cy="input-initial-investment"]').click().clear()
    cy.get('[data-cy="input-initial-investment"]').type("100")

    cy.get('[data-cy="input-annual-investment"]').click().clear()
    cy.get('[data-cy="input-annual-investment"]').type("1000")

    cy.get('[data-cy="input-expected-return"]').click().clear()
    cy.get('[data-cy="input-expected-return"]').type("5.")

    cy.get('[data-cy="input-duration"]').click().clear()

    cy.get('[data-cy="results-table"]').should("not.exist")
    cy.get('[data-cy="results-error"]')
      .should("exist")
      .should("have.text", "Please enter a duration greater than zero")
  })
})
