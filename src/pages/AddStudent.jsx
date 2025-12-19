import { useState } from "react";
import { saveStudent } from "../services/api";
import "../App.css";

const AddStudent = () => {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    department: "",
    sem: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    saveStudent(form).then(() => {
      alert("Student and Card Saved Successfully");
      setForm({
        name: "",
        dob: "",
        gender: "",
        email: "",
        department: "",
        sem: "",
      });
    });
  };

  return (
    <div className="card">
      <h2 className="page-title">Add Student</h2>

      <div className="form-grid">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />

        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />
        <input
          name="sem"
          placeholder="Semester"
          value={form.sem}
          onChange={handleChange}
        />

        <button className="btn" onClick={submit}>
          Save Student
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
