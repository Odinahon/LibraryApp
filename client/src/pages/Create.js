import { useState } from "react";
import { useHistory } from "react-router-dom";
import { httpSubmitBook } from "../hooks/requests";

const Create = (props) => {
  //we need to create states for the title, description, author input fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  // const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const { setBooks, books } = props;

  const book = { title, description, author };

  const handleSubmitNew = (e) => {
    e.preventDefault();
    httpSubmitBook(book);
    // setIsPending(false);
    setBooks([...books, book]);
    console.log(books);
    history.push("/");
  };

  return (
    <div className="create">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmitNew}>
        <label>Book title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Book description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Book author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <button>Add Book</button>
        {/* {!isPending && <button>Add Book</button>}
        {isPending && <button disabled>Ading book...</button>} */}

        {/* <p>{title}</p>
        <p>{description}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Create;
