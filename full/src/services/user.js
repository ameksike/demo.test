
import users from '../models/users.js';

/**
 * User type definition in JsDoc format
 * @typedef  {Object} TUser
 * @property {String|Number} [id]
 * @property {String} email
 * @property {String} firstName  
 * @property {String} [lastName]  
 * @property {String} [phone]  
 * @property {String} [avatar]  
 * @property {String} [birthday]  
 * @property {String} [sex]  
 * @property {Number} [age]  
 * @property {String} [subscriptionTier]
 */

/**
 * Create a new user
 * @param {TUser} user 
 * @returns {TUser} user
 */
export function createUser(user) {
    if (!user.firstName || !user.email) {
        throw new Error("Name and email are required.");
    }
    const newUser = { id: users.length + 1, ...user };
    users.push(newUser);
    return newUser;
}

/**
 * Get a user by ID
 * @param {String|Number} userId 
 * @returns {TUser|null} user
 */
export function getUserById(userId) {
    return users.find(user => user.id === parseInt(userId)) || null;
}

/**
 * Get all users
 * @returns {TUser[]} users
 */
export function getAllUsers() {
    return users;
}

/**
 * Update a user by ID
 * @param {Number|String} userId 
 * @param {TUser} updatedData 
 * @returns {TUser|null} user
 */
export function updateUser(userId, updatedData) {
    // Find user index by ID
    const index = users.findIndex(user => user.id === parseInt(userId));
    if (index === -1) {
        return null;
    }
    // Remove undefined properties
    for (let key in updatedData) {
        updatedData[key] === undefined && delete updatedData[key];
    }
    // Update user
    users[index] = { ...users[index], ...updatedData };
    // Return updated user
    return users[index];
}

/**
 * Delete a user by ID
 * @param {Number|String} userId 
 * @returns {TUser|null} user
 */
export function deleteUser(userId) {
    const index = users.findIndex(user => user.id === parseInt(userId));
    if (index === -1) {
        return null;
    }
    const deletedUser = users.splice(index, 1);
    return deletedUser[0];
}

/**
 * Export service CRUD operations as Object
 */
export default {
    create: createUser,
    getById: getUserById,
    getAll: getAllUsers,
    update: updateUser,
    remove: deleteUser
}
