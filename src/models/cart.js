const query = require('../helpers/query');

module.exports = {
    getAllCart: (userId) => query(`
    SELECT 
    a.checklist, a.total_product, a.cart_product, a.cart_user,
    b.user_id, b.name, b.email,
    c.product_name, c.store, c.price, c.city, c.seller_id 
    FROM cart AS a
    INNER JOIN user AS b
        ON a.cart_user = b.user_id
    INNER JOIN product AS c
        ON a.cart_product = c.product_id
    WHERE b.user_id = ${userId}
    `),
    addToCart: (setData) => query('INSERT INTO cart SET ?', setData),
    deleteCart: (id) => query('DELETE FROM cart WHERE id = ?', id),
    updateCart: (id, setData) => query("UPDATE cart SET ? WHERE id = ?", [setData, id]),
};