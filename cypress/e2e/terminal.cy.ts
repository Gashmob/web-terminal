describe("terminal", () => {
  it("write error if command not found", () => {
    cy.visit("/");
    const input = cy.get("#app").find("[data-test=input]");
    input.type("abcd");
    cy.get("#app").find("[data-test=input-form]").submit();
    const history = cy.get("#app").find("[data-test=history]");
    const history_children = history.children();
    history_children.should("have.length", 2);
    const error_message = history_children.last();
    error_message.contains("Command not found: abcd");
    error_message.should("have.class", "error");
  });

  it("runs command echo", () => {
    cy.visit("/");
    const input = cy.get("#app").find("[data-test=input]");
    input.type("echo hello world!");
    cy.get("#app").find("[data-test=input-form]").submit();
    const history = cy.get("#app").find("[data-test=history]");
    const history_children = history.children();
    history_children.should("have.length", 2);
    history_children.last().contains("hello world!");
  });
});
