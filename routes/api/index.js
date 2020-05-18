const router = require("express").Router();
const savedRoutes = require("./saved");
const booksRoutes = require("./books");

router.use("/books", booksRoutes);

router.use("/saved", savedRoutes);

module.exports = router;
