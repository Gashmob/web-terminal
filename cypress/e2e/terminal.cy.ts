describe("terminal", () => {
  it("write input to history", () => {
    cy.visit("/");
    const input = cy.get("#app").find("[data-test=input]");
    input.type("hello");
    cy.get("#app").find("[data-test=input-form]").submit();
    const history = cy.get("#app").find("[data-test=history]");
    const history_children = history.children();
    history_children.should("have.length", 1);
    history_children.first().contains("hello");
  });
});
