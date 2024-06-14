declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      command(command: string): void;
    }
  }
}
