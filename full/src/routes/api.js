import express from 'express';
import srvUser from '../services/user.js';

const router = express.Router();

/**
 * Create a new user
 */
router.post('/', (req, res) => {
    try {
        // data from the request body
        const { firstName, lastName, email, avatar, birthday, sex, subscriptionTier, phone = "-", age = 1 } = req.body;
        
        // call the service to create a new user
        const newUser = srvUser.create({ firstName, lastName, phone, email, avatar, birthday, sex, subscriptionTier, age });

        // return the response
        console.log(">>> Create a new user ", newUser);
        res.status(201).json({ message: 'User created', user: newUser });

    } catch (error) {
        // return the error message
        console.error(">>> Error creating a new user ", error);
        return res.status(400).json({ message: error.message });
    }
});

/**
 * Read all users
 */
router.get('/', (req, res) => {
    // call the service to get all users
    const list = srvUser.getAll();

    // return the response
    console.log(">>> Read all users", list);
    res.status(200).json(list);
});

/**
 * Read a user by ID
 */
router.get('/:id', (req, res) => {
    // call the service to get the user by ID
    const user = srvUser.getById(req.params.id);

    // return the response
    console.log(">>> Read a user by ID ", user);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
});

/**
 * Update a user by ID
 */
router.put('/:id', (req, res) => {
    // data from the request body
    const { firstName, lastName, phone, email, avatar, birthday, sex, subscriptionTier } = req.body;

    // call the service to update the user
    const user = srvUser.update(req.params.id, { firstName, lastName, phone, email, avatar, birthday, sex, subscriptionTier });

    // return the response
    console.log(">>> Update a user by ID ", user);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User updated', user });
});

/**
 * Delete a user by ID
 */
router.delete('/:id', (req, res) => {
    // get the user ID from the request
    const userId = req.params.id;

    // call the service to delete the user by ID
    const user = srvUser.remove(userId);

    // return the response
    console.log(">>> Delete a user by ID ", user);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted' });
});

export default router;
