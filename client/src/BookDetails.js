import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { httpGetBookWithId } from "./hooks/requests";
import useBooks from "./hooks/useBooks";
import { useHistory } from "react-router-dom";

const BookDetails = (props) => {
  const [book, setBook] = useState();
  const { id } = useParams();
  const { books, setBooks } = props;

  const history = useHistory();

  useEffect(() => {
    async function fetchBook() {
      const fetchedBook = await httpGetBookWithId(id);
      console.log(fetchedBook);
      setBook(fetchedBook);
    }

    fetchBook();
  }, [id]);

  const { deleteBook } = useBooks();

  const handleEdit = () => {
    console.log("Edit component is listening");
  };
  // const handleClick = () => {
  //   console.log("Delete button is clicked");
  // };

  const handleDelete = () => {
    deleteBook(book.bookId);
    const arr = books.filter((b) => b.bookId !== book.bookId);
    setBooks([...arr]);
    history.push("/");
  };

  return (
    <div className="book-details">
      {/* {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>} */}
      {book && (
        <article>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
          <div>{book.description}</div>
          {/* <button onClick={() => deleteBook(book.bookId)}>delete</button> */}
          <button onClick={handleDelete}>delete</button>
          <Link to={`/edit/${book.bookId}`}>
            {/* <button onClick={handleEdit}>edit</button> */}
            <button>edit</button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default BookDetails;
