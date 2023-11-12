import BookDetails from "./BookDetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import EditBook from "./EditBook";
import Lookup from "./Lookup";
import { useState } from "react";

function App() {
  const title = "Welcome to the Library Portal!";

  const [lookupValue, setLookupValue] = useState('');
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/search">
              <Lookup lookupValue ={lookupValue} setLookupValue = {setLookupValue}></Lookup>
            </Route>
            <Route path="/books/:id">
              <BookDetails></BookDetails>
            </Route>
            <Route path="/edit/:id">
              <EditBook></EditBook>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
