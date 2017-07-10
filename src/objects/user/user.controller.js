const userModel = require('./user.model');
const jwt = require('jsonwebtoken');

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
            res.json({ message: 'User successfully created.' }); // Will only run if above code does not "return"
        });
    }
};

const authUser = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    if (!email && !password) res.json({ message: 'No email nor password provided.' });
    else if (!email) res.json({ message: 'No email provided.' });
    else if (!password) res.json({ message: 'No password provided.' });
    else {
        userModel.findOne({
            email: email
        }, (err, user) => {
            if (err) throw err;
            if (!user) {
                res.send({ message: 'Email does not exist.' });
            }
            else {
                user.comparePassword(password, function (err, isMatch) {
                    if (isMatch && !err) {
                        const token = jwt.sign(user, process.env.JWT_SECRET, {
                            expiresIn: 10080 // in seconds
                        });
                        res.json({ message: 'JWT ' + token });
                    }
                    else {
                        res.send({ message: 'Wrong password.' });
                    }
                });
            }
        });
    }
};

const isAuth = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) return res.status(403).json({ message: 'You need to provide a token to access this resource.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, jwt_payload) => {

        if (err) return res.json({ message: err.message});
        
        userModel.findOne({ id: jwt_payload._id }, (err, user) => {
            if (err) return res.json({ message: err});
            req.user = user;
            next();
            //return res.json({ message: user});
        });        
    });
};

module.exports = {
    createUser: createUser,
    authUser: authUser,
    isAuth: isAuth
};
