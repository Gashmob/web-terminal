describe("terminal", () => {
  it("write error if command not found", () => {
    cy.visit("/");
    cy.command("abcd");
    const history = cy.get("#app").find("[data-test=history]");
    const history_children = history.children();
    history_children.should("have.length", 2);
    const error_message = history_children.last();
    error_message.contains("Command not found: abcd");
    error_message.should("have.class", "error");
  });

  it("runs command echo", () => {
    cy.visit("/");
    cy.command("echo hello world!");
    const history = cy.get("#app").find("[data-test=history]");
    const history_children = history.children();
    history_children.should("have.length", 2);
    history_children.last().contains("hello world!");
  });

  it("runs command clear", () => {
    cy.visit("/");
    for (let i = 0; i < 10; i++) {
      cy.command(`echo hello ${i}`);
    }
    cy.get("#app")
      .find("[data-test=history]")
      .children()
      .should("have.length", 20);

    cy.command("clear");
    cy.get("#app").find("[data-test=history]").should("be.empty");
  });
});
