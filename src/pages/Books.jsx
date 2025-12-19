import { useEffect, useState } from "react";
import { getBooks } from "../services/api";
import BookCard from "../components/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((res) => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <div style={styles.grid}>
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
};

export default Books;
