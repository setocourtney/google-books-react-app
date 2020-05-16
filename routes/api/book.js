  // ----  BOOK API ROUTES----
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// api/profile
router.route("/")
  .get(bookController.findAll)
  .post(bookController.addOne)
  
// api/profile/:id   
router.route("/:id")
  .delete(bookContorller.deleteOne)

module.exports = router;
