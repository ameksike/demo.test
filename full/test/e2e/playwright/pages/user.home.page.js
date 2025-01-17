import { expect } from '@playwright/test';

/**
 * @typedef {import('@playwright/test').Page} Page
 * @typedef  {import('../../../../src/models/users').TUser} TUser
 */

export class UserHomePage {
    /**
     * @param {Page} page
     */
    constructor(page) {
        this.page = page;
        this.url = process.env.PAGE_USER_HOME || 'http://localhost:3000/user';
    }

    /**
     * Navigate to the user form page
     */
    async goto() {
        await this.page.goto(this.url);
    }

    async checkUrl() {
        await expect(this.page).toHaveURL(this.url);
    }

    /**
     * Check row in the user list
     * @param {TUser} user 
     */
    async checkRow(user) {
        const userName = await this.page.locator(`td:has-text("${user.firstName} ${user.lastName}")`);
        // Ensure the new user appears in the user list
        await expect(userName).toBeVisible();
    }
};