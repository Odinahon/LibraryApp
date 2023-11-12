import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const EditBook = () => {
  // grab the id of the book, so I need to use useParams hook
  // second part now I can use my custom hook useFetch to fetch the data from db.json file
  const [bookDetails, setBookDetails] = useState({
    title: "",
    description: "",
    author: "",
  });
  const { id } = useParams();
  const { data: book, isPending } = useFetch(
    "https://intern-library-backend.azurewebsites.net/books/" + id,
    setBookDetails
  );
  const history = useHistory();
  // {
  //   isPending && <div>Loading...</div>;
  // }
  // {
  //   error && <div>Error</div>;
  // }

  // const [description, setDescription] = useState("");

  // const [title, setTitle] = useState("");

  // const [author, setAuthor] = useState("");

  //   const [isPending, setIsPending] = useState(false);
  // {book && <div>
  //   setDescription(book.description);
  //   setTitle(book.title);
  //   setAuthor(book.author);
  //   console.log(book);

  // </div>}

  const [isEdited, setIsEdited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = bookDetails;

    console.log(newBook);
    fetch("http://localhost:8000/books/" + book.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    }).then(() => {
      console.log("book edited");
      history.push("/");
    });
  };
  if (isPending) {
    return <div>Loading...</div>;
  }
  return (
    <div className="edit">
      {/* <h2>Edit Book - {id}</h2> */}
      <h2>Edit Book</h2>
      {book && (
        <form onSubmit={handleSubmit}>
          <label>Book title</label>

          <input
            type="text"
            required
            // value={book.title}
            defaultValue={bookDetails.title}
            readOnly={false}
            // isEdited={false}
            onChange={(e) => {
              setBookDetails({ ...bookDetails, title: e.target.value });
              setIsEdited(true);
            }}
          ></input>
          <label>Book description:</label>
          <textarea
            required
            defaultValue={bookDetails.description}
            readOnly={false}
            onChange={(e) =>
              setBookDetails({ ...bookDetails, description: e.target.value })
            }
          ></textarea>
          <label>Book author:</label>
          <input
            type="text"
            required
            defaultValue={bookDetails.author}
            readOnly={false}
            onChange={(e) =>
              setBookDetails({ ...bookDetails, author: e.target.value })
            }
          ></input>
          <button>Edit Book</button>
          {/* <p>{bookDetails.title}</p> */}
        </form>
      )}
    </div>
  );
};

export default EditBook;
