const {
  getBooksFromCosmos,
  addBookToCosmos,
  deleteBookFromCosmosDB,
  existsBookWithId,
  updateBookCosmos,
  updateToCosmos,
} = require("../../models/books.model");

async function httpGetBooksFromCosmos(req, res) {
  await res.status(200).json(await getBooksFromCosmos());
}

async function httpAddNewBookToCosmos(req, res) {
  const book = req.body;

  if (!book.title || !book.author || !book.description) {
    return res.status(400).json({
      error: "Missing required book property",
    });
  }
  await addBookToCosmos(book);
  return res.status(201).json(book);
}

async function httpUpdateBookCosmos(req, res) {
  const { bookId, title, author, description } = req.body;

  if (!title || !author || !description) {
    return res.status(400).json({
      error: "Missing required book property",
    });
  }
  const bookToUpdate = { title, author, description };
  await updateBookCosmos(bookId, bookToUpdate);
  // await updateToCosmos(book);
  return res.status(201).json(bookToUpdate);
}

async function httpGetBookByIdFromCosmos(req, res) {
  const bookId = req.params.id;
  // console.log(bookId);
  const existsBook = await existsBookWithId(bookId);
  //if book doesn't exists
  if (!existsBook) {
    return res.status(404).json({
      error: "Book not found",
    });
  }
  return await res.status(200).json(existsBook);
}

async function httpDeleteBookFromCosmos(req, res) {
  const bookId = req.params.id;

  console.log("book Id :" + bookId);

  const existsBook = await existsBookWithId(bookId);
  //if book doesn't exists
  if (!existsBook) {
    return res.status(404).json({
      error: "Book not found",
    });
  }
  const deleted = await deleteBookFromCosmosDB(bookId);
  return res.status(200).json(deleted);
}

/////////////////////////// MONGO DB START //////////////////////////////

// async function httpGetAllBooks(req, res) {
//   return res.status(200).json(await getAllBooks());
// }

// function httpGetBookWithId(req, res) {
//   const bookId = Number(req.params.id);
//   //if book doesn't exists
//   if (!existsBookWithId(bookId)) {
//     return res.status(404).json({
//       error: "Book not found",
//     });
//   }
//   return res.status(200).json(getBookWithId(bookId));
// }

// async function httpAddNewBook(req, res) {
//   const book = req.body;

//   if (!book.title || !book.author || !book.description) {
//     return res.status(400).json({
//       error: "Missing required book property",
//     });
//   }
//   await addNewBookToDB(book);
//   return res.status(201).json(book);
// }

// async function httpDeleteBook(req, res) {
//   const bookId = Number(req.params.id);

//   const existsBook = await existsBookWithId(bookId);
//   //if book doesn't exists
//   if (!existsBook) {
//     return res.status(404).json({
//       error: "Book not found",
//     });
//   }
//   const deleted = await deleteBookById(bookId);
//   return res.status(200).json(deleted);
// }

/////////////////////////// MONGO DB END //////////////////////////////
module.exports = {
  httpGetBooksFromCosmos,
  httpGetBookByIdFromCosmos,
  httpAddNewBookToCosmos,
  httpDeleteBookFromCosmos,
  httpUpdateBookCosmos,
};
