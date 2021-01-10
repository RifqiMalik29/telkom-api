const query = require('../helpers/query');

module.exports = {
    userInfo: (userId) => query(`SELECT * FROM user WHERE user_id = ${userId}`),
    searchStore: (storeName, userId) => query(`SELECT name, owner, photo FROM user WHERE owner LIKE '%${storeName}%' AND user_id <> ${userId} ORDER BY owner ASC`),
    updateUser: (id, setData) => query(`UPDATE user SET ? WHERE user_id = ${id}`, setData)
};