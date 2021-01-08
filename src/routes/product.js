const productController = require("../controllers/product");
const router = require("express").Router();
const { authentication } = require("../middlewares/auth");

router
  .get("/search/asc", authentication, productController.getAllProductAsc)
  .get("/search/desc", authentication, productController.getAllProductDesc)
  .post("/", authentication, productController.postProduct)
  .get("/:id", authentication, productController.getProductById)
  .patch("/:id", authentication, productController.updateProduct)
  .delete("/:id", authentication, productController.deleteProduct);

module.exports = router;
