const routes = require('express').Router();

// http://localhost:3030/api
routes.get('/', (req, res) => {
    res.send('api');
});

// http://localhost:3030/api/users and nested routes
const userRoutes = require('./objects/user').routes;
routes.use('/users', userRoutes);

module.exports = routes;
