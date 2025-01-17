import { getUser } from '../utils/fake.js';
import { getLocalClient } from '../utils/fetch.js';

// define the request object client
const request = getLocalClient();

describe('User API Integration Tests', () => {
    let createdUserId;

    test('POST /api/user - Create a new user', async () => {
        const newUser = {
            firstName: 'John Doe',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar.jpg',
            birthday: '1990-01-01',
            sex: 'male',
            subscriptionTier: 'basic',
        };

        const response = await request.post('/api/user').send(newUser);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User created');
        expect(response.body.user).toMatchObject(newUser);
        createdUserId = response.body.user.id;
        console.log(createdUserId);
    });

    test('POST /api/user - Create a new user with Fake Data', async () => {
        const newUser = getUser();
        const response = await request.post('/api/user').send(newUser);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User created');
        expect(response.body.user.firstName).toBe(newUser.firstName);
        expect(response.body.user.lastName).toBe(newUser.lastName);
        expect(response.body.user.email).toBe(newUser.email);
        expect(response.body.user.sex).toBe(newUser.sex);
        expect(response.body.user.avatar).toBe(newUser.avatar);
        expect(new Date(response.body.user.birthday).toISOString()).toBe(newUser.birthday.toISOString());
        expect(response.body.user.subscriptionTier).toBe(newUser.subscriptionTier);
    });

    test('GET /api/user - Retrieve all users', async () => {
        const response = await request.get('/api/user');

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('GET /api/user/:id - Retrieve user by ID', async () => {
        const response = await request.get(`/api/user/${createdUserId}`);

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(createdUserId);
    });

    test('PUT /api/user/:id - Update user details', async () => {
        const updatedData = {
            firstName: 'John Updated',
            subscriptionTier: 'business',
        };

        const response = await request.put(`/api/user/${createdUserId}`).send(updatedData);

        expect(response.status).toBe(200);
        expect(response.body.user.firstName).toBe(updatedData.firstName);
        expect(response.body.user.subscriptionTier).toBe(updatedData.subscriptionTier);
        expect(response.body.user.sex).toBe('male');
    });

    test('DELETE /api/user/:id - Delete a user', async () => {
        const response = await request.delete(`/api/user/${createdUserId}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User deleted');
    });

    test('GET /api/user/:id - Retrieve non-existent user', async () => {
        const response = await request.get(`/api/user/${createdUserId}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('User not found');
    });
});
