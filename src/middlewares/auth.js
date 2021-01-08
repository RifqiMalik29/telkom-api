const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    authentication: (req, res, next) => {
        const bearearHeader  = req.headers.authentication
        let token;
        if (bearearHeader){
            token = bearearHeader.split(' ')[1];
        };

        if (!token){
            return res.sendStatus(403);
        }

        jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
            if (err) return res.sendStatus(403);
            req.token = user;

            next();
        });
    },

    authorization: (req, res, next) => {
        const token = req.token;
        if (token.role === 5){
            res.sendStatus(403);
        }
        next();
    }
};