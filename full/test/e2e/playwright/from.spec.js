import { faker } from '@faker-js/faker/locale/en';
import { expect, test } from '@playwright/test';
import { getUser } from '../../utils/fake.js';

test.describe('Testing the User Module', () => {
    test('should create an account with username and password', async ({
        page,
    }) => {
        const user = getUser();
        // Step 1: Navigate to the form page
        await page.goto('http://localhost:3000/user/form');  // Replace with your actual URL

        // Step 2: Fill in the form fields
        await page.fill('input[name="firstName"]', user.firstName);
        await page.fill('input[name="lastName"]', user.lastName);
        await page.fill('input[name="email"]', user.email);
        await page.fill('input[name="avatar"]', user.avatar);
        await page.fill('input[name="birthday"]', user.birthday.toISOString().split('T')[0]);
        await page.selectOption('select[name="sex"]', user.sex);
        await page.selectOption('select[name="subscriptionTier"]', user.subscriptionTier);

        // Step 3: Submit the form
        await page.click('button[type="submit"]');  // Submit button

        // Step 4: Wait for the response (e.g., a confirmation message or a user list)
        await expect(page).toHaveURL('http://localhost:3000/user');  // Replace with your actual redirect URL
        // await expect(page.locator('text=User created')).toBeVisible();  // Check for a success message (adjust as needed)

        // Optionally, verify that the user data appears in the list
        const userName = await page.locator(`td:has-text("${user.firstName} ${user.lastName}")`);
        await expect(userName).toBeVisible();  // Ensure the new user appears in the user list
    });
});