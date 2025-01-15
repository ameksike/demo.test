import { expect, jest } from '@jest/globals';

import { getUser } from '../utils/fake.js';
import userService from '../__mocks__/user.service';

describe('User Service Tests with Mock and Real Implementation', () => {

    beforeEach(() => {
        // Clear mock calls between tests
        jest.clearAllMocks();
    });

    test('should call getById once with correct parameter', async () => {
        // Mock implementation for getById
        const mockUser = getUser();
        // Save original service implementation
        const origin = userService.getById.getMockImplementation();
        // Mock getById method to return mockUser object
        userService.getById.mockReturnValue(mockUser);
        // Call getById method
        const result = userService.getById(2);
        // Set back original implementation
        userService.getById.mockImplementation(origin);

        // Verify getById method is called once with correct parameter
        expect(userService.getById).toHaveBeenCalledTimes(1);
        // Verify getById method is called with correct parameter
        expect(userService.getById).toHaveBeenCalledWith(2);

        // Verify result is equal to mockUser object
        expect(result.firstName).toEqual(mockUser.firstName);
        expect(result.avatar).toEqual(mockUser.avatar);
        expect(result.email).toEqual(mockUser.email);
        expect(result.sex).toEqual(mockUser.sex);
    });

    test('should create a user and verify call count', () => {
        const mockUser = getUser();
        const result = userService.create(mockUser);

        expect(userService.create).toHaveBeenCalledTimes(1);
        expect(userService.create).toHaveBeenCalledWith(mockUser);
        expect(result.firstName).toEqual(mockUser.firstName);
        expect(result.avatar).toEqual(mockUser.avatar);
        expect(result.email).toEqual(mockUser.email);
        expect(result.sex).toEqual(mockUser.sex);
    });

    test('should get a user by ID and verify call count', () => {
        const mockUser = getUser();
        const user = userService.create(mockUser);
        const users = userService.getAll();
        const result = userService.getById(user.id);

        expect(userService.getById).toHaveBeenCalledTimes(1);
        expect(userService.getById).toHaveBeenCalledWith(2);
        expect(result.firstName).toEqual(mockUser.firstName);
        expect(result.avatar).toEqual(mockUser.avatar);
        expect(result.email).toEqual(mockUser.email);
        expect(result.sex).toEqual(mockUser.sex);
        expect(users.length > 0).toBe(true);
    });

    test('should update a user', () => {
        const mockUser = getUser();
        const updatedData = { firstName: 'New Name' };

        const user = userService.create(mockUser);
        const result = userService.update(user.id, updatedData);

        expect(userService.update).toHaveBeenCalledTimes(1);
        expect(userService.update).toHaveBeenCalledWith(3, updatedData);
        expect(result.firstName).toBe(updatedData.firstName);
        expect(result.avatar).toEqual(user.avatar);
        expect(result.email).toEqual(user.email);
        expect(result.sex).toEqual(user.sex);
    });

    test('should remove a user', () => {
        const mockUser = getUser();
        const user = userService.create(mockUser);
        const result = userService.remove(user.id);

        expect(userService.remove).toHaveBeenCalledTimes(1);
        expect(userService.remove).toHaveBeenCalledWith(4);
        expect(result.firstName).toEqual(mockUser.firstName);
        expect(result.avatar).toEqual(mockUser.avatar);
        expect(result.email).toEqual(mockUser.email);
        expect(result.sex).toEqual(mockUser.sex);
    });
});
