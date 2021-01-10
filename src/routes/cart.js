const cartController = require("../controllers/cart");
const router = require("express").Router();
const { authentication } = require("../middlewares/auth");

router
  .post("/", authentication, cartController.addToCart)
  .delete("/:id", authentication, cartController.deleteFromCart)
  .patch("/:id", authentication, cartController.updateChecklist)
  .get("/all", authentication, cartController.showAllCart)

module.exports = router;
