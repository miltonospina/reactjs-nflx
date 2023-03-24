describe("Counter component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Increase button works", () => {
    cy.get('[data-testid="counter"]').then((c) => {
      const initialValue = parseInt(c.text());
      cy.get('[data-testid="increase"]').click();

      cy.get('[data-testid="counter"]').should(
        "have.text",
        (initialValue + 1).toString()
      );
    });
  });


  it("Decrease button works", () => {
    cy.get('[data-testid="counter"]').then((c) => {
      const initialValue = parseInt(c.text());
      cy.get('[data-testid="decrease"]').click();

      cy.get('[data-testid="counter"]').should(
        "have.text",
        (initialValue - 1).toString()
      );
    });
  });
});
