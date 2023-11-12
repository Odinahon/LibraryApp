const booksDatabase = require("./books.mongo");
const ReadPreference = require("mongodb").ReadPreference;
const { v4: uuidv4 } = require("uuid");

// require("./books.mongo").connect();

const DEFAULT_BOOK_ID = 10;

async function getlatestBookId() {
  const latestBook = await Number(booksDatabase.findOne().sort("-bookId"));

  if (!latestBook) {
    return DEFAULT_BOOK_ID;
  }
  return latestBook.bookId;
}

async function existsBookWithId(bookId) {
  return await booksDatabase.findOne({
    bookId: bookId,
  });
}

// get all books from Cosmod DB
async function getBooksFromCosmos(req, res) {
  const docquery = booksDatabase.find({}).read(ReadPreference.NEAREST);
  return await docquery.exec();
}

async function addBookToCosmos(book) {
  const newId = uuidv4();
  const assignBookId = Object.assign(book, {
    bookId: newId,
  });
  const newBook = new booksDatabase(assignBookId);
  return await newBook.save();
}

async function updateToCosmos(book) {
  // return await booksDatabase.updateOne(
  //   { bookId: book.bookId },
  //   {
  //     $set: {
  //       author: book.author,
  //       title: book.title,
  //       description: book.description,
  //     },
  //   }
  // );
  // return await booksDatabase.findByIdAndUpdate(
  //   { bookId: book.bookId },
  //   {
  //     $set: {
  //       author: book.author,
  //       title: book.title,
  //       description: book.description,
  //     },
  //   }
  // );
  console.log("Update to Cosmos");
}
async function updateBookCosmos(bookId, book) {
  return await booksDatabase.findOne({ bookId }).then((updatedBook) => {
    updatedBook.author = book.author;
    updatedBook.title = book.title;
    updatedBook.description = book.description;
    updatedBook.save();
  });
}
async function deleteBookFromCosmosDB(bookId) {
  return await booksDatabase.findOneAndDelete({
    bookId: bookId,
  });
}

////////////////////////////////////////// MONGO DB  START /////////////////////////////
// const books = new Map();

// const DEFAULT_BOOK_ID = 1;

// const book = {
//   bookId: 1,
//   title: "The Book",
//   description: "New Book",
//   author: "Odina",
// };

// saveBook(book);

// books.set(book.bookId, book);

// async function existsBookWithId(bookId) {
//   return await booksDatabase.findOne({
//     bookId: bookId,
//   });
// }

// //sorting in decending order
// async function getlatestBookId() {
//   const latestBook = await booksDatabase.findOne().sort("-bookId");

//   if (!latestBook) {
//     return DEFAULT_BOOK_ID;
//   }
//   return latestBook.bookId;
// }
// async function getAllBooks() {
//   return await booksDatabase.find(
//     {},
//     {
//       _id: 0,
//       __v: 0,
//     }
//   );
// }

// async function saveBook(book) {
//   await booksDatabase.updateOne(
//     {
//       bookId: book.bookId,
//     },
//     book,
//     {
//       upsert: true,
//     }
//   );
// }

// async function addNewBookToDB(book) {
//   const newBookId = (await getlatestBookId()) + 1;
//   const newBook = Object.assign(book, {
//     bookId: newBookId,
//   });
//   await saveBook(newBook);
// }

// function getBookWithId(bookId) {
//   const book = books.get(bookId);
//   return book;
// }

// async function deleteBookById(bookId) {
//   //   const deletedBook = books.get(bookId);
//   //   books.delete(bookId);
//   //   return deletedBook;
//   return await booksDatabase.deleteOne({
//     bookId: bookId,
//   });
// }

///////////////////////////////////////////////// MONGO DB END //////////////////////////////////////////
module.exports = {
  getBooksFromCosmos,
  addBookToCosmos,
  deleteBookFromCosmosDB,
  existsBookWithId,
  updateBookCosmos,
  updateToCosmos,
};
