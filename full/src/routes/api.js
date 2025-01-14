import express from 'express';
import users from '../models/users.js';

const router = express.Router();

/**
 * Create a new user
 */
router.post('/', (req, res) => {
    const { firstName, lastName, phone, email, avatar, birthday, sex, subscriptionTier, id = users.length + 1 } = req.body;
    const newUser = { id, firstName, lastName, phone, email, avatar, birthday, sex, subscriptionTier };
    users.push(newUser);
    res.status(201).json({ message: 'User created', user: newUser });
});

/**
 * Read all users
 */
router.get('/', (req, res) => {
    res.status(200).json(users);
});

/**
 * Read a user by ID
 */
router.get('/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
});

/**
 * Update a user by ID
 */
router.put('/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    const { firstName, lastName, phone, email, avatar, birthday, sex, subscriptionTier } = req.body;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.avatar = avatar || user.avatar;
    user.birthday = birthday || user.birthday;
    user.sex = sex || user.sex;
    user.subscriptionTier = subscriptionTier || user.subscriptionTier;
    user.phone = phone || user.phone;
    res.status(200).json({ message: 'User updated', user });
});

/**
 * Delete a user by ID
 */
router.delete('/:id', (req, res) => {
    const index = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'User not found' });
    users.splice(index, 1);
    res.status(200).json({ message: 'User deleted' });
});

export default router;
