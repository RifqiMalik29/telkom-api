const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    localhost: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected');
});

module.exports = connection;