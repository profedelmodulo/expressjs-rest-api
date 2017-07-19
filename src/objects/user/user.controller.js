/**
 * @file Contains the controllers/functions that are used by the user routes.
 * @author John Char <yannosx@gmail.com> 
 */

// Dependencies
    const userModel = require('./user.model');
// ============

// Creates a new user
    const createUser = (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        if (!email && !password) res.json({ message: 'No email nor password provided.' });
        else if (!email) res.json({ message: 'No email provided.' });
        else if (!password) res.json({ message: 'No password provided.' });
        else {
            const newUser = new userModel({
                email: email,
                password: password
            });
            newUser.save(err => {
                if (err) return res.json({ message: 'Email already exists.' });
                res.json({ message: 'User successfully created.' });
            });
        }
    };
// ==================

// Returns a single user
    const getSingleUser = (req, res) => {
        //TODO: add logic
    };
// =====================

// Returns all users
    const getAllUsers = (req, res) => {
        //TODO: add logic
    };
// =====================

// Updates a user
    const updateUser = (req, res) => {
        //TODO: add logic
    };
// =====================

// Deletes a user
    const deleteUser = (req, res) => {
        //TODO: add logic
    };
// =====================

module.exports = {
    createUser: createUser,
    getSingleUser: getSingleUser,
    getAllUsers: getAllUsers,
    updateUser: updateUser,
    deleteUser: deleteUser
};
