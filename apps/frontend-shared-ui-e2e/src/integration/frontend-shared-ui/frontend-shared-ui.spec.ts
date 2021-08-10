describe('frontend-shared-ui: FrontendSharedUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=frontendsharedui--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to FrontendSharedUi!');
  });
});
