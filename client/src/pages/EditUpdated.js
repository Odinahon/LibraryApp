import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { httpGetBookWithId, httpUpdateBook } from "../hooks/requests";

const EditUpdated = (props) => {
  const [book, setBook] = useState();
  const { books, setBooks } = props;
  const { id } = useParams();
  const history = useHistory();
  //useEffect runs when state changes, the second argument is //here you tell useEffect what state to watch if you want to watch the changing of a  particular state and here we care about someState
  useEffect(() => {
    console.log("Use effect ...");
    async function fetchBook() {
      const fetchedBook = await httpGetBookWithId(id);
      console.log(fetchedBook);
      setBook(fetchedBook);
    }
    fetchBook();
  }, [id]);

  function updateBook() {
    const index = books.findIndex((b) => b.bookId === book.bookId);
    const newBooks = [...books];
    newBooks[index] = book;
    setBooks(newBooks);
    httpUpdateBook(book);
    history.push("/");
  }

  return (
    <div className="edit">
      {/* <h2>Edit Book - {book.bookId}</h2> */}
      <h2>Edit Book</h2>
      {book && (
        <form>
          <label>Book title</label>

          <input
            type="text"
            required
            defaultValue={book.title}
            readOnly={false}
            onChange={(e) => {
              setBook({ ...book, title: e.target.value });
            }}
          ></input>
          <label>Book description:</label>
          <textarea
            required
            defaultValue={book.description}
            readOnly={false}
            onChange={(e) => setBook({ ...book, description: e.target.value })}
          ></textarea>
          <label>Book author:</label>
          <input
            type="text"
            required
            defaultValue={book.author}
            readOnly={false}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          ></input>
          <button onClick={updateBook}>Edit Book</button>
          <p>{book.title}</p>
        </form>
      )}
    </div>
  );
};

export default EditUpdated;
