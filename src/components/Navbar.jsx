import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Library System</h3>
      <div>
        <Link to="/add-student">Add Student</Link>
        <Link to="/add-author">Add Author</Link>
        <Link to="/add-book">Add Book</Link>
        <Link to="/add-transaction">Issue Book</Link>
        <Link to="/students">Students</Link>
      </div>
    </div>
  );
};

export default Navbar;
