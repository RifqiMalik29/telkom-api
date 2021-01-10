const userController = require("../controllers/user");
const { authentication } = require("../middlewares/auth");
const router = require("express").Router();

router
  .get("/login", authentication, userController.getUserInfo)
  .get("/search", authentication, userController.searchStore)
  .patch("/", authentication, userController.updateUser);

module.exports = router;
