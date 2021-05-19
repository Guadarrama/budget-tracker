import './App.css';
import { Expenses } from "./Expenses";
import { PieChart } from "./PieChart";

const InputForm = e => {
  return(
    <div className="add-expense-form">
      <form>
        <div>
          <label>Expense Name:</label>
          <input type="text" className="title"></input>
        </div>
        <div>
          <label>Description:</label>
          <input type="text" className="description"></input>
        </div>
        <div>
          <label>Category</label>
          <input type="text" className="category"></input>
        </div>
        <div>
          <label> Amount:</label>
          <input type="text" className="amount"></input>
        </div>
        <input type="submit"></input>
      </form>
    </div>
  )
}


function App() {
  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      <PieChart />
      <InputForm />
      <Expenses />
    </div>
  );
}

export default App;
