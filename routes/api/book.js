  // ----  BOOK API ROUTES----
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// api/books
router.route("/")
  .get(bookController.findAll)
  .post(bookController.addOne)
  
// api/books/:id   
router.route("/:id")
  .delete(bookController.deleteOne)

module.exports = router;
