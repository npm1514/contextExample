var url = Cypress.env(Cypress.env('host'));
url = url + "/newPromo";
const todaysDate = new Date();
var startDate = todaysDate.getFullYear() + "-" + ("0" + (todaysDate.getMonth()+1)).slice(-2) + "-" + ("0" + todaysDate.getDate()).slice(-2)
var endDate = todaysDate.getFullYear() + "-" + ("0" + (todaysDate.getMonth()+1)).slice(-2) + "-" + ("0" + (todaysDate.getDate()+13)).slice(-2)
var allocationDate = todaysDate.getFullYear() + "-" + ("0" + (todaysDate.getMonth()+1)).slice(-2) + "-" + ("0" + (todaysDate.getDate()+7)).slice(-2)
var expirationDate = todaysDate.getFullYear() + "-" + ("0" + (todaysDate.getMonth()+1)).slice(-2) + "-" + ("0" + (todaysDate.getDate()+10)).slice(-2)

describe('Verify Elements on New Promo Page', () => {
  it('Verify Elements', () =>{
    startPage();
    cy.get('#navTitle').should('contain','New Promotion - Draft')
    cy.get('#file-upload-input-for')
      .find('span')
      .should('have.text','Upload Product IDs')
    cy.get('#file-upload-input-for > span.MuiButton-label')
       .contains('Template')
    cy.get('#cancelButton > button')
      .find('span')
      .should('have.text','Back')
    cy.get('#newPromoInput').find('h4').should('contain','Creator')
    cy.get('#newPromoInput > div').find('p').should('contain','localuser')
    cy.get('#newPromoInput').find('h4').should('contain','Promotion Name')
    cy.get('#newPromoInput').find('h4').should('contain','Event Type')
    cy.get('#newPromoInput').find('h4').should('contain','Promotion Start')
    cy.get('#newPromoInput').find('h4').should('contain','Promotion End')
    cy.get('#newPromoInput').find('h4').should('contain','Promotional Calculation')
    cy.get('#newPromoInput > div').find('h4').should('contain','Reward Allocation')
    cy.get('#newPromoInput > div').find('h4').should('contain','Reward Expiration')
    cy.get('#OnePromoDialog > div').find('h4').should('contain','Product IDs')
    cy.get('#OnePromoDialog > div').find('h4').should('contain','Minimum Purchase $')
    cy.get('#OnePromoDialog > div').find('h4').should('contain','Reward Issued $')
    cy.get('#OnePromoDialog').find('button').should('contain','Create Promotion')
  });
})
describe('Verify User Can Add New Promotions', () => {
  it('Add new promotion', () =>{
    startPage();
    cy.get('#OnePromoDialog > div').find('input').eq(0).type('SuperCypressSale') // Promotion Name
    cy.get('#OnePromoDialog > div').find('div').contains('% Off Site Sale').click() // Event Type
    cy.get('.MuiListItem-button').eq(3).should('have.attr','data-value').should('contain','Bundle')
    cy.get('.MuiListItem-button').eq(3).click() // Select Bundle
    cy.get('#OnePromoDialog > div').find('input').eq(2).click().type(startDate) // Promo Start
    cy.get('#OnePromoDialog > div').find('input').eq(3).click().type(endDate) // Promo End
    cy.get('#newPromoInput > div > div:nth-child(5) * > input').should('have.attr','value').should('contain','Product') // Promotion Calculation (Product Selected)
    cy.get('#OnePromoDialog > div').find('input').eq(6).click().type(allocationDate + 'T08:30') // Reward Allocation
    cy.get('#OnePromoDialog > div').find('input').eq(7).click().type(expirationDate + 'T09:30') // Reward Expiration
    cy.get('#OnePromoDialog > div').find('textarea').eq(0).type('11223344') // Product IDs
    cy.get('#OnePromoDialog > div').find('input').eq(8).type('100') // Min Purchase $
    cy.get('#OnePromoDialog > div').find('input').eq(9).type('20') // Reward Issued $
    cy.get('#OnePromoDialog').find('button').eq(1).should('contain','Create Promotion').click() // Click Create button
    // Confirmation Pop-up
    cy.get('#OnePromoDialog > div > div > div').find('h2').contains('Is all of the information correct?') // Confirmation
    cy.get('#OnePromoDialog > div > div > div').find('button').contains('Back') // Back Button
    cy.get('#OnePromoDialog > div > div > div').find('button').contains('Submit') // Submit Button
    cy.get('#OnePromoDialog > div > div > div').find('button').eq(1).should('contain','Submit').click() // Click Submit
    // Delete New Promotion 
    cy.get('.MuiTablePagination-actions > button:last').click() // Click Next Page Button
    cy.wait(500)
    cy.get('input[type=checkbox]').eq(2).click() // Select first item in list.
    cy.get('.MuiIconButton-root').should('have.attr','aria-label').should('contain','delete') // Find Delete Button
    cy.get('.MuiIconButton-root').eq(0).click() // Delete Item
  });
})

function startPage(){
    cy.visit(url)
    cy.wait(1000);
}