import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Library Portal</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Book</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
