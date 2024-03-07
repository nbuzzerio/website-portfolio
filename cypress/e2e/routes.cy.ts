import "@testing-library/cypress";

describe("Navbar", () => {
  it("displays the login page when clicking sign-in button", () => {
    cy.visit("/");
    cy.findByText(/text logo/i).should("exist");
  });

  describe("header logo", () => {
    it("displays logo on the navbar", () => {
      cy.visit("/");
      cy.viewport(1024, 768);
      cy.findAllByAltText(/logo image/i).should("exist");
    });

    it("hides logo on the navbar when in mobile", () => {
      cy.visit("/");
      cy.viewport(414, 896);
      cy.findAllByAltText(/logo image/i).should("be.hidden");
    });
  });

  describe("drawer", () => {
    it("displays home link on the drawer", () => {
      cy.visit("/");
      cy.get(".menu-btn").click();
      cy.findByText(/home/i).should("exist");
    });
  });
});
