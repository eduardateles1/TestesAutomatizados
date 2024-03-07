///<reference types='cypress'/>
//@ts-nocheck

describe('users must login on the page', () => {

  let data;

  before(() => {
    cy.fixture('login').then((tData) => {
      data = tData
    });
  });

  it('through the application system', () => {
    cy.login(data.username, data.password);
  });

});