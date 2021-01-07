const productController = require("../controllers/product");
const router = require("express").Router();

router
  .get("/search/query", productController.getAllProduct)
  .post("/", productController.postProduct)
  .get("/:id", productController.getProductById)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

module.exports = router;