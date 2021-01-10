const router = require("express").Router();

// User
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const userRoutes = require("./routes/user");

// Auth
const authRoutes = require("./routes/auth");

router
  .use("/product", productRoutes)
  .use("/auth", authRoutes)
  .use("/cart", cartRoutes)
  .use("/user", userRoutes);

module.exports = router;
