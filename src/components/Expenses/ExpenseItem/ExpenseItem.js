import React, { useState } from 'react'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../../Card/Card'
import './ExpenseItem.css'

const ExpenseItem = ({date, title, amount}) => {
  const [_title, setTitle] = useState(title); 
  const updateTitle = () => {
    setTitle('updated title!');
  }
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date}/>
        <div className='expense-item__description'>
          <h2>{_title}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
        <button onClick={updateTitle}>Change Title</button>
      </Card>
    </li>
  )
}

export default ExpenseItem
