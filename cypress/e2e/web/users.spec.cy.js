//@ts-nocheck
///<reference types='cypress'/>
import {
  faker
} from '@faker-js/faker';

describe('admin must register new users', () => {

  before(() => {
    cy.fixture('login').then(() => {
      cy.auth_bypass_api();
    });
  });

  it('through the application form', () => {

    const password = faker.internet.password(10)
    cy.new_user(faker.name.fullName(), faker.internet.email(), password, "ADMIN")
  });

});