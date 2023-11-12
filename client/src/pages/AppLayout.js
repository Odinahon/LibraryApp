import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { httpGetAllBooks } from "../hooks/requests";
import Home from "./Home";
import Create from "./Create";
import Lookup from "./Lookup";
import Navbar from "../Navbar";
import BookDetails from "../BookDetails";
import EditUpdated from "./EditUpdated";

const AppLayout = (props) => {
  const [books, setBooks] = useState([]);
  const [lookupValue, setLookupValue] = useState("");
  useEffect(() => {
    async function fetchBooks() {
      const books = await httpGetAllBooks();
      setBooks(books);
    }

    fetchBooks();
  }, []);
  console.log(books);
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home books={books}></Home>
          </Route>
          <Route exact path="/books">
            <Home books={books}></Home>
          </Route>
          <Route path="/books/:id">
            <BookDetails books={books} setBooks={setBooks}></BookDetails>
          </Route>
          <Route exact path="/create">
            <Create books={books} setBooks={setBooks}></Create>
          </Route>
          <Route path="/edit/:id">
            <EditUpdated books={books} setBooks={setBooks}></EditUpdated>
          </Route>
          <Route exact path="/search">
            <Lookup
              lookupValue={lookupValue}
              setLookupValue={setLookupValue}
            ></Lookup>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default AppLayout;
