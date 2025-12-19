import { useState } from "react";
import { saveTransaction } from "../services/api";
import { TRANSACTION_STATUS } from "../constants/enums";
import "../App.css";

const AddTransaction = () => {
  const [form, setForm] = useState({
    transactionStatus: "",
    fine: "",
    issueOrReturn: true,
    dueDate: "",
    bookId: "",
    cardId: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const submit = () => {
    if (!TRANSACTION_STATUS.includes(form.transactionStatus)) {
      alert("Please select valid transaction status");
      return;
    }

    saveTransaction({
      transactionStatus: form.transactionStatus,
      fine: Number(form.fine),
      issueOrReturn: form.issueOrReturn,
      dueDate: form.dueDate,
      bookId: Number(form.bookId),
      cardId: Number(form.cardId),
    }).then(() => {
      alert("Transaction added successfully");
      setForm({
        transactionStatus: "",
        fine: "",
        issueOrReturn: true,
        dueDate: "",
        bookId: "",
        cardId: "",
      });
    });
  };

  return (
    <div className="card">
      <h2 className="page-title">Issue / Return Book</h2>

      <div className="form-grid">
        <select
          name="transactionStatus"
          value={form.transactionStatus}
          onChange={handleChange}
        >
          <option value="">Transaction Status</option>
          {TRANSACTION_STATUS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="fine"
          placeholder="Fine"
          value={form.fine}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="issueOrReturn"
            checked={form.issueOrReturn}
            onChange={handleChange}
          />
          Issue Book
        </label>

        <input
          type="number"
          name="bookId"
          placeholder="Book ID"
          value={form.bookId}
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
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;
