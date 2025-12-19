import { useState } from "react";
import { saveBook } from "../services/api";
import { GENRES } from "../constants/enums";
import "../App.css";

const AddBook = () => {
  const [form, setForm] = useState({
    name: "",
    pages: "",
    publisherName: "",
    genre: "",
    available: true,
    authorId: "",
    cardId: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const submit = () => {
    if (!GENRES.includes(form.genre)) {
      alert("Please select a valid genre");
      return;
    }

    saveBook({
      name: form.name,
      pages: Number(form.pages),
      publisherName: form.publisherName,
      genre: form.genre,
      available: form.available,
      authorId: Number(form.authorId),
      cardId: Number(form.cardId),
    }).then(() => {
      alert("Book Saved Successfully");
      setForm({
        name: "",
        pages: "",
        publisherName: "",
        genre: "",
        available: true,
        authorId: "",
        cardId: "",
      });
    });
  };

  return (
    <div className="card">
      <h2 className="page-title">Add Book</h2>

      <div className="form-grid">
        <input
          name="name"
          placeholder="Book Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="pages"
          placeholder="Pages"
          value={form.pages}
          onChange={handleChange}
        />
        <input
          name="publisherName"
          placeholder="Publisher Name"
          value={form.publisherName}
          onChange={handleChange}
        />

        <select name="genre" value={form.genre} onChange={handleChange}>
          <option value="">Select Genre</option>
          {GENRES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <label>
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
          />
          Available
        </label>

        <input
          type="number"
          name="authorId"
          placeholder="Author ID"
          value={form.authorId}
          onChange={handleChange}
        />
        <input
          type="number"
          name="cardId"
          placeholder="Card ID"
          value={form.cardId}
          onChange={handleChange}
        />

        <button className="btn" onClick={submit}>
          Save Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
