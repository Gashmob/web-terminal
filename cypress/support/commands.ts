/// <reference types="cypress" />

Cypress.Commands.add("command", (command: string) => {
  const input = cy.get("#app").find("[data-test=input]");
  input.type(command);
  cy.get("#app").find("[data-test=input-form]").submit();
});
