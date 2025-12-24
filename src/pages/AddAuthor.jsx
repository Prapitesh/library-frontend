import { useEffect, useState } from "react";
import { saveAuthor } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AddAuthor = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    gender: "",
    country: "",
    rating: "",
  });

  /* 🔐 AUTH GUARD */
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      alert("Please login first");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.gender || !form.country || !form.rating) {
      alert("Please fill all fields");
      return;
    }

    try {
      await saveAuthor({
        name: form.name,
        gender: form.gender,
        country: form.country,
        rating: Number(form.rating),
      });

      alert("Author Saved Successfully");

      setForm({
        name: "",
        gender: "",
        country: "",
        rating: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to save author");
    }
  };

  return (
    <div className="card">
      <h2>Add Author</h2>

      <input
        name="name"
        placeholder="Author Name"
        value={form.name}
        onChange={handleChange}
      />

      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.1"
        name="rating"
        placeholder="Rating (e.g. 4.5)"
        value={form.rating}
        onChange={handleChange}
      />

      <button className="btn" onClick={handleSubmit}>
        Save Author
      </button>
    </div>
  );
};

export default AddAuthor;
