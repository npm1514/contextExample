let url = Cypress.env(Cypress.env('host'));

describe('Verify Elements on List Page', () => {
  it('Verify Elements', () =>{
    startPage();
    cy.get('#navTitle').should('contain','Promotions')
    cy.get('#newPromoButton > button')
      .find('span')
      .should('have.text','New Promotion')
    cy.get('.muitablerow-head').should('contain','Promotion Name')
    cy.get('.muitablerow-head').should('contain','Promotion Time Frame')
    cy.get('.muitablerow-head').should('contain','Promotion Percent')
    cy.get('.muitablerow-head').should('contain','Dollar Off Range')
    cy.get('.muitablerow-head').should('contain','SKU Count')
    cy.get('.muitablerow-head').should('contain','Creator')
    cy.get('.muitablerow-head').should('contain','Status')
    cy.get('input[type=checkbox]').should('have.attr','aria-label').should('contain','select all')
    cy.get('.MuiTablePagination-caption').should('contain','Rows per page:')
    cy.get('.MuiTablePagination-actions > button:first').should('have.attr','title').should('contain','Previous page')
    cy.get('.MuiTablePagination-actions > button:last').should('have.attr','title').should('contain','Next page')
  });
})
describe('Verify Multi-Select CheckBox', () => {
    it('Verify Multi-Select CheckBox Selects All Options', () =>{
      startPage();
      cy.get('input[type=checkbox]:first').click()
      cy.get('span.Mui-checked:first')
      for (let i =1; i <= 25; i++){
        cy.get('.mui-selected:nth-child(' + i + ')')
      }
      cy.get('.mui-selected:nth-child(25)')

    });
  })
  describe('Verify Pagination', () => {
    it('Verify Previous and Next Pagination Button Functionality', () =>{
      startPage();
      cy.get('.MuiTablePagination-actions > button:last').click()
      cy.get('.MuiTableRow-hover').should('have.length',1)
      cy.get('.MuiTablePagination-actions > button:first').click()

    });
  })

function startPage(){
    cy.visit(url)
    cy.wait(1000);
}