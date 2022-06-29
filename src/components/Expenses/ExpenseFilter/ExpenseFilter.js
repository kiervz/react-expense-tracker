import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = ({onChamgeFilter, selected}) => {
    return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select title='year_filter' value={selected} onChange={(e) => {onChamgeFilter(e.target.value)}}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
        </select>
        </div>
    </div>
    );
}

export default ExpenseFilter
