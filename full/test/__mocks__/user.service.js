import { jest } from '@jest/globals';

import * as srvUser from '../../src/services/user.js';

jest.unstable_mockModule('../../src/services/user.js', async () => {
    try {
        return {
            create: jest.fn(srvUser.create),
            getById: jest.fn(srvUser.getById),
            getAll: jest.fn(srvUser.getAll),
            update: jest.fn(srvUser.update),
            remove: jest.fn(srvUser.remove),
            checkId: jest.fn((id) => parseInt(id)),
        };

    } catch (error) {
        // Ignore module not found
        console.log(error);
    }
});

const userService = await import('../../src/services/user.js');

export default userService;