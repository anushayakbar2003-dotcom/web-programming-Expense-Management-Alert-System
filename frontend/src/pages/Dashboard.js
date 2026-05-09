import React, { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {
  const [data, setData] = useState(null);

  const userId = localStorage.getItem("userId");

  const loadData = async () => {
    const res = await API.get(`/expenses/${userId}`);
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addExpense = async () => {
    const title = prompt("Enter title");
    const amount = prompt("Enter amount");
    const category = prompt("Enter category");

    await API.post("/expenses/add", {
      title,
      amount,
      category,
      user: userId,
    });

    loadData();
  };

  return (
    <div>
        <h1>Expense Management Alert System</h1>
      <h2>Dashboard</h2>

      <button onClick={addExpense}>Add Expense</button>

      {data && (
        <>
          <h3>Total Spent: {data.totalSpent}</h3>

          <h3>Alerts:</h3>
          {data.alerts.map((a, i) => (
            <p key={i}>{a}</p>
          ))}

          <h3>Expenses:</h3>
          {data.expenses.map((e, i) => (
            <p key={i}>
              {e.title} - {e.amount}
            </p>
          ))}
        </>
      )}
    </div>
  );
}

export default Dashboard;