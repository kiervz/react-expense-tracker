import React, { useState } from 'react'
import './NewExpenseForm.css'

const NewExpenseForm = ({onSubmitExpense, onShowFormHandler}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  }

  const onChangeDate = (e) => {
    setDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (!title || !amount || !date)  {
      return alert('Please fill all fields!');
    }

    const expenses_data = {
      'id': Math.random().toString(),
      'title': title,
      'amount': +amount,
      'date': new Date(date),
    }

    onSubmitExpense(expenses_data)

    setTitle('')
    setAmount('')
    setDate('')
  }

  return (
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Title</label>
              <input type='text' value={title} onChange={onChangeTitle} />
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input type='number' min='0.01' step='0.01' value={amount} onChange={onChangeAmount}/>
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input type='date' min='2018-01-01' max='2023-12-30' value={date} onChange={onChangeDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
          <button onClick={onShowFormHandler}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
  )
}

export default NewExpenseForm
