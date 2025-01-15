import { getUser } from '../../utils/fake.js';

describe('User Form Tests', () => {
    beforeEach(() => {
        // Navigate to the form page before each test
        cy.visit('/user/form');
    });

    it('should submit the form and display the new user in the list', () => {
        const mockUser = getUser();

        // Fill out the form
        cy.get('#firstName').type(mockUser.firstName);
        cy.get('#lastName').type(mockUser.lastName);
        cy.get('#sex').select(mockUser.sex); // For <select> elements
        cy.get('#birthday').type(mockUser.birthday.toISOString().split('T')[0]); // For <input type="date">
        cy.get('#subscriptionTier').select(mockUser.subscriptionTier); // For another <select>
        cy.get('input[name="email"]').type(mockUser.email);
        cy.get('input[name="avatar"]').type(mockUser.avatar);

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Verify the user is in the table
        cy.get('table')
            .contains('td', mockUser.firstName) // Assert that the table contains the name
            .should('be.visible');
    });
});
