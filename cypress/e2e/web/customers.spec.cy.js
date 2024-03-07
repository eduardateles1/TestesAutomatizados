//@ts-nocheck
///<reference types='cypress'/>
import {
    faker
} from '@faker-js/faker';

//describe("Users must view the customer list", () => {
    //before(() => {
     //   cy.auth_bypass_api();
    //});
   // beforeEach(() => {
    //    cy.intercept("**/api/v1/customers/all",{fixture: 'customers.json'})
  //  });

   // it("through the application form", () => {
//cy.list_customers();
   // });

//});

describe('users must register new clients', () => {

    before(() => {
        cy.auth_bypass_api();
    });

    it('through the application form', () => {

        cy.new_customer(faker.name.fullName(),
            faker.internet.email(),
            faker.company.name(),
            faker.random.numeric(6),
            faker.address.cityName(),
            faker.address.state(),
            faker.address.streetAddress(),
            faker.address.country(),
            faker.address.zipCode(),
            faker.phone.number())
    });

});