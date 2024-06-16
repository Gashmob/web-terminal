describe("terminal", () => {
  it("does nothing", () => {
    cy.visit("/");
    cy.get("#app");
  });
});
