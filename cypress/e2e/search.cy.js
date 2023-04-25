/*global cy*/
describe("Search case", () => {
  const endpoint = "http://localhost:4000/movies*";
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should search and retrieve results on a valid search", () => {
    const keyword = "alien";
    cy.intercept(endpoint).as("backend");

    cy.get('[data-testid="search-bar-input"]').type(keyword);
    cy.get('[data-testid="search-bar-button"]').click();
    cy.wait(["@backend"]);

    cy.get(
      '[data-testid="search-results"] .movie-tile .movie-details .movie-title'
    ).each(($title) => {
      cy.wrap($title)
        .invoke("text")
        .then((text) => {
          expect(text.toLowerCase()).to.contain(keyword.toLowerCase());
        });
    });
  });

  it("Should perform a resultless search", () => {
    cy.intercept(endpoint).as("backend");
    const keyword = "1234567890qwerty";

    cy.get('[data-testid="search-bar-input"]').type(keyword);
    cy.get('[data-testid="search-bar-button"]').click();
    cy.wait(["@backend"]);

    cy.get('[data-testid="search-results"] .movie-tile').should("not.exist");
  });

  it("Should switch genres", () => {
    cy.intercept(endpoint).as("backend");

    cy.get('[data-testid="genre"]:nth-of-type(2)').then((c) => {
      const testGenre = c.text().toLowerCase();

      c.click();
      cy.wait(["@backend"]);

      cy.get(
        '[data-testid="search-results"] .movie-tile .movie-details .movie-genres'
      ).each(($title) => {
        cy.wrap($title)
          .invoke("text")
          .then((text) => {
            expect(text.toLowerCase()).to.contain(testGenre);
          });
      });
    });
  });

  it("Should select a movie an display it on the header", () => {
    cy.intercept(endpoint).as("backend");
    cy.get(".movie-title")
      .first()
      .then((c) => {
        const movieName = c.text().toLowerCase();

        c.click();

        cy.get(".movie-details-row .movie-info .movie-title h3 ").then((h) => {
          expect(h.text().toLowerCase()).to.contain(movieName);
        });
      });
  });
});
