import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css'

const ExpensesList = ({expenses}) => {
  if (expenses.length === 0) {
    return <p className='expenses-list__fallback'>No Expenses found.</p>;
  }


  return (
    <div className='expenses-list'>
        {
            expenses.map((expense) => 
                <ExpenseItem 
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} />
            )
        }
    </div>
  )
}

export default ExpensesList
