const userRoutes = require('express').Router();

// User controller
    const userController = require('./user.controller');

// http://localhost:3030/api/users
    userRoutes.get('/', (req, res) => {
        res.send('All users.');
    });

// http://localhost:3030/api/users/create
    userRoutes
        .get('/new', (req, res) => {
            res.json({ message: 'Send a POST request here with a unique email and a password to create a new user.' });
        })
        .post('/new', userController.createUser);

// http://localhost:3030/api/users/auth
    userRoutes
        .get('/auth', (req, res) => {
            res.json({ message: 'Send a POST request here with user credentials to authenticate.' });
        })
        .post('/auth', userController.authUser);

// http://localhost:3030/api/users/auth
    userRoutes
        .get('/info', (req, res) => {
            res.json({ message: 'Send a POST request here with your token to view this resource.' });
        })
        .post('/info', userController.isAuth, (req, res) => {
            res.json({ message: 'This is a protected resource'});
        });

module.exports = userRoutes;
