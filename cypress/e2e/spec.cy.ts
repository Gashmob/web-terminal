describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("#app").contains("Hello World!");
  });
});
