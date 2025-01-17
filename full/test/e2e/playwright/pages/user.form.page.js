import { expect } from '@playwright/test';

/**
 * @typedef {import('@playwright/test').Page} Page
 * @typedef  {import('../../../../src/models/users').TUser} TUser
 */

export class UserFormPage {
    /**
     * @param {Page} page
     */
    constructor(page) {
        this.page = page;
        this.btnApply = page.locator('button[type="submit"]');
    }

    /**
     * Navigate to the user form page
     */
    async goto() {
        await this.page.goto('http://localhost:3000/user/form');
    }

    /**
     * Click on the Apply button
     */
    async btnRegisterClick() {
        await expect(this.btnApply).toBeVisible();
        await this.btnApply.click();
    }

    /**
     * Fill in the user form
     * @param {TUser} user 
     */
    async fillForm(user) {
        await this.page.fill('input[name="firstName"]', user.firstName);
        await this.page.fill('input[name="lastName"]', user.lastName);
        await this.page.fill('input[name="email"]', user.email);
        await this.page.fill('input[name="avatar"]', user.avatar);
        await this.page.fill('input[name="birthday"]', user.birthday.toISOString().split('T')[0]);
        await this.page.selectOption('select[name="sex"]', user.sex);
        await this.page.selectOption('select[name="subscriptionTier"]', user.subscriptionTier);
    }
};