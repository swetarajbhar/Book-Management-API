const express = require("express");
const router = express.Router();

const { BookSchema } = require("../../../global/validations/schema");
const { validate } = require("../../../global/validations/validator");
const {
  addBooks,
  listBooks,
  findBook,
  updateBook,
  deleteBook,
} = require("../../controllers/books/index");

router.post("/v1/add", validate(BookSchema), addBooks);
router.put("/v1/update/:id", validate(BookSchema), updateBook);
router.post("/v1/list", listBooks);
router.get("/v1/find/:id", findBook);
router.delete("/v1/delete/:id", deleteBook);

module.exports = router;
