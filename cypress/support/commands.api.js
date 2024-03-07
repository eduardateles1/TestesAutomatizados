// @ts-nocheck
import urls from './urls';
require('cypress-plugin-api')

Cypress.Commands.add('auth_bypass_api', () => {
    cy.fixture('login').then((data) =>{
        cy.login(data.username, data.password).then((token) => Cypress.env('auth.token', token));
        cy.find_user_by_username(data.username).then((user) => Cypress.env("auth.user.id",user.id))
    })
});


Cypress.Commands.add('login_api', (username, password) => {
    cy.api({
        method: 'POST',
        url: urls.users_api + '/auth',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            username: username,
            password: password
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body.token
    });
});


Cypress.Commands.add('find_user_by_username', (username) => {
    cy.api({
        method: 'GET',
        url: urls.users_api + '/api/v1/users/find-by/user-name/',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Cypress.env("auth.token")
        },
        qs: {
            username: username,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body
    });
});