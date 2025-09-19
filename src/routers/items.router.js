const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

// GET /api/items
// POST /api/items
router.route("/").get(itemControllers.browse).post(itemControllers.add);

// GET /api/items/:id
// PUT /api/items/:id
// DELETE /api/items/:id
router
  .route("/:id")
  .get(itemControllers.read)
  .put(itemControllers.edit)
  .delete(itemControllers.destroy);

module.exports = router;
