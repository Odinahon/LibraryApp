const express = require("express");

const {
  httpGetBooksFromCosmos,
  httpGetBookByIdFromCosmos,
  httpAddNewBookToCosmos,
  httpDeleteBookFromCosmos,
  httpUpdateBookCosmos,
} = require("./books.controller");

const booksRouter = express.Router();

// booksRouter.get('/', httpGetAllBooks);
// booksRouter.post('/', httpAddNewBook);
// booksRouter.delete('/:id', httpDeleteBook);

booksRouter.get("/", httpGetBooksFromCosmos);
booksRouter.get("/:id", httpGetBookByIdFromCosmos);
booksRouter.post("/", httpAddNewBookToCosmos);
booksRouter.delete("/:id", httpDeleteBookFromCosmos);
booksRouter.put("/:id", httpUpdateBookCosmos);

module.exports = booksRouter;
