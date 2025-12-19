import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";
import "../App.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((res) => setTransactions(res.data));
  }, []);

  return (
    <>
      <h2 className="page-title">Transactions</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>Card</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.book?.title}</td>
              <td>{t.card?.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Transactions;
