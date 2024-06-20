const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUser, updateUser, deleteUser } = require("./../handlers/userHandlers");

router.post('/users', async (req, res) => {
    try {
        const user = await addUser(req.body);
        res.status(201).send(user);  // Send the created user back
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await getUsers();
        res.send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
