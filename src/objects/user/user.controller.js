const userModel = require('./user.model');

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

module.exports = {
    createUser: createUser
};
