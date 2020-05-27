/// <reference types="cypress" />

describe("WittrCoin", () => {
  it("has a link the user can click", () => {
    cy.visit("/");

    cy.get("#coin-simon").click();

    cy.get("#coin-count").should("contain", "1");
  });
});
