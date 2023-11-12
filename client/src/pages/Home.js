import BookList from "../BookList";
// import SearchBar from "./SearchBar";

const Home = (props) => {
  return (
    <div className="home">
      {/* {props.books} */}
      {/* {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>} */}

      {/* {this is to go with} */}
      <BookList books={props.books} title="List of Books"></BookList>

      {/* {props.books && <BookList books = {props.books} title="List of Books"></BookList>} */}
      {/* {books && <Search books = {books}></Search>} */}
      {/* {books && <SearchBar books={books}></SearchBar>} */}
    </div>
  );
};

export default Home;
