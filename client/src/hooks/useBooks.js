import { useCallback, useEffect, useState } from "react";

import {
  httpGetAllBooks,
  httpGetBookWithId,
  httpSubmitBook,
  httpDeleteBook,
} from "./requests";

function useBooks() {
  const [books, saveBooks] = useState([]);
  const [book, saveBook] = useState();

  const getBooks = useCallback(async () => {
    const fetchedBooks = await httpGetAllBooks();
    saveBooks(fetchedBooks);
    console.log(fetchedBooks);
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const getBookWithId = useCallback(async (id) => {
    const fetchedBook = await httpGetBookWithId(id);
    saveBook(fetchedBook);
  }, []);

  const submitBook = useCallback(async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get("book-title");
    const description = data.get("book-description");
    const author = data.get("book-author");
    await httpSubmitBook({
      title,
      author,
      description,
    });
  }, []);

  const deleteBook = useCallback(async (id) => {
    await httpDeleteBook(id);
  }, []);

  const updateBook = useCallback(async (e) => {
    e.preventDefault();
    // await httpUpdateBookCosmos({
    //   bookId,
    //   title,
    //   author,
    //   description,
    // });
  }, []);

  return {
    books,
    book,
    getBookWithId,
    submitBook,
    deleteBook,
    updateBook,
  };
}
export default useBooks;
