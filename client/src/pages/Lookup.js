import { useState } from "react";
import SearchResult from "./SearchResult";
import useFetch from "../useFetch";
import useBooks from "../hooks/useBooks";

const Lookup = ({ lookupValue, setLookupValue }) => {
  // const { data: books } = useFetch(
  //   "https://intern-library-backend.azurewebsites.net/books"
  // );
  const { books } = useBooks();
  const [newBooks, setNewBooks] = useState([]);
  const submitHandler = (event) => {
    event.preventDefault();
    const newArr = books.filter((book) => book.author === lookupValue);
    setNewBooks([...newArr]);
  };
  return (
    <div className="search">
      <h2>Start Searching </h2>
      <form onSubmit={submitHandler}>
        <label>
          <input
            type="search"
            placeholder="Type Here"
            required
            value={lookupValue}
            onChange={(event) => {
              setLookupValue(event.target.value);
            }}
          ></input>
        </label>
        <button> Go </button>
      </form>
      <div>
        <SearchResult books={newBooks} author={lookupValue}></SearchResult>
      </div>
    </div>
  );
};
export default Lookup;
