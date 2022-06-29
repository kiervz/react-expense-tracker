import React, { useState } from 'react'
import Card from '../Card/Card'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'
import ExpensesList from './ExpensesList/ExpensesList'
import './Expenses.css'
import ExpenseChart from './ExpenseChart/ExpenseChart'

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  } 

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  
  return (
    <Card className='expenses'>
      <ExpenseFilter 
        selected={filteredYear} 
        onChamgeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  )
}

export default Expenses
