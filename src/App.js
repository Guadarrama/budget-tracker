import React, { useState } from 'react';
import './App.css';
import { Expenses } from "./component/Expenses";
import { PieChart } from "./component/PieChart";

const ItemForm = e => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const AddItem = e =>{
    console.log("Name:", name, "Description: ", description);
    console.log("Category: ", category, "Amount: ", amount);
    console.log("date: ", date);

  }

  return(
    <div className="add-expense-form">
      <form onSubmit={AddItem}>
        <div>
          <label>Expense Name:</label>
          <input type="text" className="title" 
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" className="description" 
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Category</label>
          <input type="text" className="category" 
            onChange={e => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label> Amount:</label>
          <input type="number" className="amount" 
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label> Date:</label>
          <input type="date" className="date"
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  )
}


function App() {
  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      <PieChart />
      <ItemForm />
      <Expenses />
    </div>
  );
}

export default App;
