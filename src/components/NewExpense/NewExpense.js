import React, { useState } from 'react'
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm/NewExpenseForm'

const NewExpense = ({onSubmitExpense}) => {
  let [isShowForm, setIsShowForm] = useState(false);

  const onShowFormHandler = () => {
    setIsShowForm(!isShowForm)
  }

  return (
    <div className='new-expense'>
      { 
        !isShowForm && 
        <div className='new-expense__actions'>
          <button onClick={onShowFormHandler}>Add New Expense</button>
        </div>
      }
      { isShowForm && <NewExpenseForm onShowFormHandler={onShowFormHandler} onSubmitExpense={onSubmitExpense}/>}
    </div>
  )
}

export default NewExpense
