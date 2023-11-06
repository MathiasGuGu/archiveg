describe("Navigation", () => {
  it("should navigate to the feed page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href="/feed"]:visible').first().click();

    cy.url().should("include", "/feed");
  });
});

describe("Navigation", () => {
  it("should navigate to the home", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href="/feed"]:visible').first().click();
    cy.get('a[href="/"]:visible').first().click();

    cy.url().should("include", "/");
    cy.get("h1").should("contain", "Discover interesting");
  });
});

describe("Navigation", () => {
  it("should navigate to the Login page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href="/api/auth/login?"]:visible').first().click();
  });
});

describe("Navigation", () => {
  it("should navigate to the Login page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href="/api/auth/register?"]:visible').first().click();
  });
});

describe("Add post btn", () => {
  it("should navigate to the editor", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href="/post/add"]:visible').first().click();

    cy.url().should("include", "/post/add");

    cy.contains("Article Image");
  });
});
