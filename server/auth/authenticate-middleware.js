const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET
    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'access denied' });
            } else {
                req.user = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'Token missing' })
    }
};