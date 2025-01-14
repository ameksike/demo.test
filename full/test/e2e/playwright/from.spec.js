import { faker } from '@faker-js/faker/locale/en';
import { expect, test } from '@playwright/test';

test.describe('Testing the User Module', () => {
    test('should create an account with username and password', async ({
        page,
    }) => {
        const username = faker.internet.username(); // before version 9.1.0, use userName()
        const password = faker.internet.password();
        const email = faker.internet.exampleEmail();

        // Visit the webpage and create an account.
        await page.goto('https://www.example.com/register');
        await page.getByLabel('email').fill(email);
        await page.getByLabel('username').fill(username);
        await page.getByLabel('password', { exact: true }).fill(password);
        await page.getByLabel('confirm password').fill(password);
        await page.getByRole('button', { name: 'Register' }).click();

        // Now, we try to login with these credentials.
        await page.goto('https://www.example.com/login');
        await page.getByLabel('email').fill(email);
        await page.getByLabel('password').fill(password);
        await page.getByRole('button', { name: 'Login' }).click();

        // We should have logged in successfully to the dashboard page.
        await expect(page).toHaveURL(/.*dashboard/);
    });
});