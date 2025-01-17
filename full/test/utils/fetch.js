
import request from 'supertest';
import express from 'express';
import apiRoutes from '../../src/routes/api.js';

/**
 * Get a local client
 * @returns {Function} - Supertest client
 */
export function getLocalClient() {
    // Use the following code to test a local API
    const app = express();
    app.use(express.json());
    app.use('/api/user', apiRoutes);
    return request(app);
}

/**
 * Get a remote client
 * @returns {Function} - Fetch client
 */
export function getRemoteClient() {
    // Use the following code to test a remote API
    // it could be Axios, Fetch, or any other client
    return fetch;
}