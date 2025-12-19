import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddStudent from "./pages/AddStudent";
import AddAuthor from "./pages/AddAuthor";
import AddBook from "./pages/AddBook";
import AddTransaction from "./pages/AddTransaction";
import Students from "./pages/Students";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-author" element={<AddAuthor />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
