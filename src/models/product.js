const query = require('../helpers/query');

module.exports = {
    getAllProductAsc: (name) => query(`SELECT * FROM product WHERE name LIKE '%${name}%' ORDER BY price ASC`),
    getAllProductDesc: (name) => query(`SELECT * FROM product WHERE name LIKE '%${name}%' ORDER BY price DESC`),
    getProductById: (id) => query("SELECT * FROM product WHERE product_id = ?", id),
    postProduct: (setData) => query("INSERT INTO product SET ?", setData),
    updateProduct: (id, setData) => query("UPDATE product SET ? WHERE product_id = ?", [setData, id]),
    deleteProduct: (id) => query("DELETE FROM product WHERE product_id = ?", id)
}