import React from 'react';
import Item from './ExpenseItem';
import {MdDelete} from 'react-icons/md'

export const ExpenseList = ({expenses, handleDelete}) => {

    return (
        <>
            <ul className='list'>
                {expenses.map((expense) =>  {
                    return <Item key={expense.id} expense={expense} handleDelete={handleDelete} />
                })}
            </ul>
            {expenses.length > 0 && <button onClick={handleDelete} className='btn'>Clear List
                <MdDelete  className='btn-icon'/>
            </button>}    
        
        </>
    )
}

export default ExpenseList;