import { faker } from '@faker-js/faker';

/**
 * Get fake data using Faker.js
 * @link https://fakerjs.dev/guide/frameworks.html
 */

/**
 * Get a random user
 * @returns {Object} - User
 */
export function getUser() {
    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sexType(),
        subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    }
}

/**
 * Get a random account
 * @returns {Object} - Account
 */
export function getAccount() {
    return {
        username: faker.internet.username(),
        password: faker.internet.password(),
        email: faker.internet.exampleEmail(),
        userAgent: faker.internet.userAgent()
    }
}

/**
 * Get age by range (minors, adults, ancient)
 * @returns {Object} - Random product
 */
export function ageByRange() {
    const generator = (range = null) => {
        switch (range) {
            case 'minors':
                return faker.number.int({ min: 0, max: 17 });
            case 'adults':
                return faker.number.int({ min: 18, max: 60 });
            default:
                return faker.number.int({ min: 61, max: 120 });
        }
    }
    const minors = Array.from({ length: 10 }, () => generator('minors'));
    const adults = Array.from({ length: 10 }, () => generator('adults'));
    const ancient = Array.from({ length: 10 }, () => generator());
    return { minors, adults, ancient };
}