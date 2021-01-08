const cartController = require("../controllers/cart");
const router = require("express").Router();
const { authentication } = require("../middlewares/auth");

router
  .post("/", authentication, cartController.addToCart)
  .delete("/:id", cartController.deleteFromCart)
  .patch("/:id", cartController.updateChecklist)
  .get("/all", authentication, cartController.showAllCart)

module.exports = router;
