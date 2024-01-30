describe("template spec", () => {
  it("renders the main app page and gets the header", () => {
    cy.visit("http://localhost:5173/")
    cy.get("h1").should("have.text", "React Investment Calculator")
  })
})
