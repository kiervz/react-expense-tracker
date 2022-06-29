import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_data = [{
  id: 1,
    title: 'Toilet Paper',
    amount: 29.9,
    date: new Date(2021, 6, 27)
  },
  {
    id: 2,
    title: 'House Insurance',
    amount: 1909.9,
    date: new Date(2022, 6, 28)
  },
  {
    id: 3,
    title: 'Car Insurance',
    amount: 1290.1,
    date: new Date(2022, 6, 29)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_data)
  
  const saveExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  }

  return (
    <div className="App">
      <NewExpense onSubmitExpense={saveExpense}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
