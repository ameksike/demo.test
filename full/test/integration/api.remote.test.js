import { getUser } from '../utils/fake.js';
import { getRemoteClient } from '../utils/fetch.js';

// define the request object client, where it is re quired to start the API web server and specify the full URL
const request = getRemoteClient();
const server = process.env.API_URL || 'http://localhost:3000';

describe('User API Integration Tests', () => {
    let createdUserId;

    test('POST /api/user - Create a new user', async () => {
        // Arrange
        const newUser = getUser();

        // Act
        const response = await request.post(server + '/api/user', newUser);

        // Assert
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User created');
        // expect(response.body.user).toMatchObject(newUser);
        expect(response.body.user.firstName).toBe(newUser.firstName);
        expect(response.body.user.lastName).toBe(newUser.lastName);
        expect(response.body.user.email).toBe(newUser.email);
        expect(response.body.user.sex).toBe(newUser.sex);
        expect(response.body.user.avatar).toBe(newUser.avatar);
        createdUserId = response.body.user.id;
    });

    test('POST /api/user - Create a new user with Fake Data', async () => {
        // Arrange
        const newUser = getUser();

        // Act
        const response = await request.post(server + '/api/user', newUser);

        // Assert
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
        // Act
        const response = await request.get(server + '/api/user');

        // Assert
        //expect(response.body).toBeInstanceOf(Array);
        expect(response.status).toBe(200);
        expect(!!response.body.length).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('GET /api/user/:id - Retrieve user by ID', async () => {
        // Act
        const response = await request.get(`${server}/api/user/${createdUserId}`);

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(createdUserId);
    });

    test('PUT /api/user/:id - Update user details', async () => {
        // Arrange
        const updatedData = {
            firstName: 'John Updated',
            subscriptionTier: 'business',
        };

        // Act
        const response = await request.put(`${server}/api/user/${createdUserId}`, updatedData);

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.user.firstName).toBe(updatedData.firstName);
        expect(response.body.user.subscriptionTier).toBe(updatedData.subscriptionTier);
        expect(!!response.body.user.sex.length).toBe(true);
    });

    test('DELETE /api/user/:id - Delete a user', async () => {
        // Act
        const response = await request.delete(`${server}/api/user/${createdUserId}`);

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User deleted');
    });

    test('GET /api/user/:id - Retrieve non-existent user', async () => {
        // Act
        const response = await request.get(`${server}/api/user/${createdUserId}`);

        // Assert
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('User not found');
    });
});
