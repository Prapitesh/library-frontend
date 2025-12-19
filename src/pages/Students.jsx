import { useEffect, useState } from "react";
import { getAllStudents } from "../services/api";
import "../App.css";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents().then((res) => setStudents(res.data));
  }, []);

  return (
    <>
      <h2 className="page-title">Students</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.department}</td>
              <td>{s.sem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Students;
