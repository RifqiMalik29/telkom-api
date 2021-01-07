const db = require('../config/mysql');

module.exports = (query, payload = null) => {
    return new Promise((resolve, reject) => {
        db.query(query, payload, (err, result) => {
            if (err) reject(new Error(err));
            resolve(result);
        });
    });
};