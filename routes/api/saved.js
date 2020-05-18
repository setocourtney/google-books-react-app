  // ----  BOOK API ROUTES----
const router = require("express").Router();
const savedController = require("../../controllers/savedController");

// api/saved
router.route("/")
  .get(savedController.findAll)
  .post(savedController.addOne)
  
// api/saved/:id   
router.route("/:id")
  .delete(savedController.deleteOne)

module.exports = router;
