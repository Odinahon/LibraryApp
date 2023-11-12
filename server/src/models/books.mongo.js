const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

///////////////  For MONGO DB
// const booksSchema = new mongoose.Schema({
//   bookId: {
//     type: Number,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
// });

// Connects booksSchema with the "books" collection
module.exports = mongoose.model("Book", booksSchema);
