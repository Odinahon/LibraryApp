import { Link } from "react-router-dom";

const SearchResult = ({ books }) => {
  let booksContent = <p>No books found.</p>;

  if (books.length > 0) {
    booksContent = books.map((book) => (
      <div key={book.bookId}>
        <ul>
          {" "}
          <Link to={`/books/${book.bookId}`}>
            <li>{book.title}</li>
          </Link>
        </ul>
      </div>
    ));
  }

  return (
    <div className="search-result">
      {/* <h2>Hello from Search Result Component</h2> */}

      {/* {books.map((book) => (
        
            <div key={book.id}>
                <ul>  <Link to={`/books/${book.id}`}>
                        <li>{book.title}</li>
                    </Link>
                    
                </ul>
            </div>
          ))} */}

      {booksContent}
    </div>
  );
};
export default SearchResult;
