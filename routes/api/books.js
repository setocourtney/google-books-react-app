// --- ROUTES FOR GOOGLE BOOKS API ---

const router = require("express").Router();
const googleAPI = require("../../controllers/googleAPI");

// api/books
router.route("/")
  .get(googleAPI.searchBooks);

module.exports = router;
