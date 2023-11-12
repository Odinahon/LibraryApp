const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/books/books.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/books", booksRouter);

module.exports = app;
