const BookCard = ({ book }) => {
  return (
    <div style={styles.card}>
      <h4>{book.title}</h4>
      <p>
        <b>Genre:</b> {book.genre}
      </p>
      <p>
        <b>Author:</b> {book.author?.name}
      </p>
      <p>
        <b>Available:</b> {book.available ? "Yes" : "No"}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    width: "220px",
  },
};

export default BookCard;
