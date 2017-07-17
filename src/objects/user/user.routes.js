const userRoutes = require('express').Router();
const isAuth = require('../../auth').isAuth;
const userController = require('./user.controller');

// http://localhost:3030/api/users
    userRoutes
        .get('/', isAuth, (req, res) => {
            res.send('All users.');
        })
        .post('/', userController.createUser);

module.exports = userRoutes;
