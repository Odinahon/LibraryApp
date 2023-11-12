import { useState } from "react";
const SearchBar = ({ books }) => {
  const [author, setAuthor] = useState("");
  

  function filterBooks(books) {
    let newBooks = books.filter((book) => book.author === author);
    console.log(newBooks);
    return (
      <div>
        {newBooks.map((book) => {
          <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>;
        })}
      </div>
    );
  }
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search component is listening");
    console.log(author);
    console.log("after Search button pressed "+books);
    return filterBooks(books);
  };
  return (
    <div className="search-bar">
      <form id="form" onSubmit={handleSearch}>
        <input
          type="search"
          id="query"
          name="q"
          placeholder="Search..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
