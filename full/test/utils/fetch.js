
import request from 'supertest';
import express from 'express';
import apiRoutes from '../../src/routes/api.js';

/**
 * Get a local client
 * @link https://www.npmjs.com/package/supertest
 * @returns {Function} - Supertest client
 */
export function getLocalClient() {
    // Use the following code to test a local API
    let app = express();
    app.use(express.json());
    app.use('/api/user', apiRoutes);
    return request(app);
}

/**
 * Get a remote client: Use the following code to test a remote API, it could be Axios, Fetch API, or any other client
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
export function getRemoteClient() {
    return {
        /**
         * POST method
         * @param {string} url 
         * @param {object} [data] 
         * @param {object} [headers] 
         * @returns {Promise<{status: Number, body: Object, error?: Error}>}
         */
        post: async function (url, data = {}, headers = {}) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', ...headers },
                    body: JSON.stringify(data),
                });
                const body = await response.json();
                if (!response.ok) {
                    return {
                        body,
                        error: new Error(body?.message || (typeof body === "string" && body) || `Create action failed`),
                        status: response.status
                    };
                }
                return { status: response.status, body };
            }
            catch (error) {
                return { error, status: 500 };
            }
        },
        /**
         * GET method
         * @param {string} url 
         * @param {object} headers 
         * @returns {Promise<{status: Number, body: Object, error?: Error}>}
         */
        get: async function (url, headers = {}) {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', ...headers },
                });
                const body = await response.json();
                if (!response.ok) {
                    return {
                        body,
                        error: new Error(body?.message || (typeof body === "string" && body) || `Select action failed`),
                        status: response.status
                    };
                }
                return { status: response.status, body };
            }
            catch (error) {
                return { error, status: 500 };
            }
        },
        /**
         * PUT method
         * @param {string} url 
         * @param {object} [data] 
         * @param {object} [headers] 
         * @returns {Promise<{status: Number, body: Object, error?: Error}>}
         */
        put: async function (url, data = {}, headers = {}) {
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', ...headers },
                    body: JSON.stringify(data),
                });
                const body = await response.json();
                if (!response.ok) {
                    return {
                        body,
                        error: new Error(body?.message || (typeof body === "string" && body) || `Update action failed`),
                        status: response.status
                    };
                }
                return { status: response.status, body };
            }
            catch (error) {
                return { error, status: 500 };
            }
        },
        /**
         * DELETE method
         * @param {string} url 
         * @param {object} [headers] 
         * @returns {Promise<{status: Number, body: Object, error?: Error}>}
         */
        delete: async function (url, headers = {}) {
            try {
                const response = await fetch(url, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json', ...headers },
                });
                const body = await response.json();
                if (!response.ok) {
                    return {
                        body,
                        error: new Error(body?.message || (typeof body === "string" && body) || `Delete action failed`),
                        status: response.status
                    };
                }
                return { status: response.status, body };
            }
            catch (error) {
                return { error, status: 500 };
            }
        }
    };
}