///<reference types='cypress'/>
//@ts-nocheck

describe('users must login on the page', () => {

    let data;

    before(() => {
        cy.fixture('login').then((tData) => {
            data = tData   
        });
    });
    it('through the api of the application system', () => {
        cy.login_api(data.username, data.password);
    });
});