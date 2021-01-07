const query = require('../helpers/query');

module.exports = {
    checkUser: (setData) => query(`SELECT * FROM user WHERE email='${setData.email}'`),
    postRegister: (setData) => query('INSERT INTO user SET ?', setData),
}