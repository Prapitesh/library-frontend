import { useState } from "react";
import { issueBook } from "../services/api";

const IssueBook = () => {
  const [studentId, setStudentId] = useState("");
  const [bookId, setBookId] = useState("");

  const handleIssue = () => {
    issueBook({ studentId, bookId }).then(() => {
      alert("Book Issued Successfully");
    });
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <input
        placeholder="Student ID"
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        placeholder="Book ID"
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={handleIssue}>Issue</button>
    </div>
  );
};

export default IssueBook;
